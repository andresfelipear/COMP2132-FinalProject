const $game     = $("#game");
const $newGame  = $('#new-game');
const $rollDice = $('#roll-dice');
const players   = ["player", "opponent"];

const DURATION_ANIMATION = 500; // 500ms

// data
const dices = fetchData();

players.forEach( player => {
    $game.append(createPlayer(player));
})

// dices
const $dice1Player   = $('#dice1-player');
const $dice2Player   = $('#dice2-player');
const $dice1Opponent = $('#dice1-opponent');
const $dice2Opponent = $('#dice2-opponent');

// scores
let totalScorePlayer   = 0;
let scorePlayer        = 0;
let totalScoreOpponent = 0;
let scoreOpponent      = 0;
let numRounds          = 0;

// pop-up
const $popUp = $('.pop-up');
const $closePopup  = $('#close-popup');

// icons
const faceSmile = `<i class="fa-solid fa-face-smile"></i>`;
const skull     = `<i class="fa-solid fa-skull-crossbones"></i>`;
const faceMeh   = `<i class="fa-solid fa-face-meh"></i>`

$rollDice.click(rollDice);
$closePopup.click(function(){
    $popUp.css('display', 'none').fadeOut(DURATION_ANIMATION);
});
$newGame.click(newGame);

function createPlayer(player)
{
    const element = 
    `<div id="${player}">
        <h4>${toTitleCase(player)}</h4>
        <div>
            <h5>${toTitleCase(player)}'s Dice</h5>
            <div>
                <div id="dice1-${player}">
                    <h6>Dice #1</h6>
                </div>
                <div id="dice2-${player}">
                    <h6>Dice #2</h6>
                </div>
            </div>
        </div>
        <div>
            <h5>${toTitleCase(player)}'s Score</h5>
            <div>
                <div id="score-${player}">
                    <h6>Score this Round</h6>
                    <p>0</p>
                </div>
                <div id="total-score-${player}">
                    <h6>Total Score</h6>
                    <p>0</p>
                </div>
            </div>
    </div>`

    return element
}

function rollDice()
{
    if(numRounds == 3)
    {
        defineWinner(totalScorePlayer, totalScoreOpponent);
    }
    else
    {
        const dice1Player   = getRandomDice();
        const dice2Player   = getRandomDice();
        const dice1Opponent = getRandomDice();
        const dice2Opponent = getRandomDice();
    
        appendImageAsChild($dice1Player, dice1Player);
        appendImageAsChild($dice2Player, dice2Player);
        appendImageAsChild($dice1Opponent, dice1Opponent);
        appendImageAsChild($dice2Opponent, dice2Opponent);
    
        scorePlayer = getPlayerScore(dice1Player, dice2Player);
        scoreOpponent = getPlayerScore(dice1Opponent, dice2Opponent);
    
        totalScoreOpponent += scoreOpponent;
        totalScorePlayer   += scorePlayer;
    
        $('#score-player p').text(scorePlayer);
        $('#total-score-player p').text(totalScorePlayer);
        $('#score-opponent p').text(scoreOpponent);
        $('#total-score-opponent p').text(totalScoreOpponent);
    
        numRounds++;
    }
}

function fetchData(fileLocation)
{
    const jsonString = `
    [
        {
            "name": "one",
            "value": 1,
            "picture": "../images/dices/dice-six-faces-one.svg"
        },
        {
            "name": "two",
            "value": 2,
            "picture": "../images/dices/dice-six-faces-two.svg"
        },
        {
            "name": "three",
            "value": 3,
            "picture": "../images/dices/dice-six-faces-three.svg"
        },
        {
            "name": "four",
            "value": 4,
            "picture": "../images/dices/dice-six-faces-four.svg"
        },
        {
            "name": "five",
            "value": 5,
            "picture": "../images/dices/dice-six-faces-five.svg"
        },
        {
            "name": "six",
            "value": 6,
            "picture": "../images/dices/dice-six-faces-six.svg"
        }
    ]`;

    return JSON.parse(jsonString);
}

function getRandomDice()
{
    return dices[Math.floor(Math.random() * dices.length)];
}

function getImageFromDice(dice)
{
    const image = new Image();
    image.src = dice.picture;
    image.alt = dice.name;

    return image;
}

function appendImageAsChild(element, dice)
{
    if(element.find("img").length > 0)
    {
        element.find("img")
                .attr("src", dice.picture)
                .attr("alt", dice.name)
                .fadeIn(DURATION_ANIMATION);
    }
    else
    {
        element.append(getImageFromDice(dice));
    }
}

function getPlayerScore(dice1, dice2)
{
    if(dice1.value == 1 || dice2.value == 1)
    {
        return 0;
    }
    else if(dice1.value === dice2.value)
    {
        return 2*(dice1.value + dice2.value);
    }
    else
    {
        return dice1.value + dice2.value;
    }
}

function defineWinner( totalScorePlayer, totalScoreOpponent)
{
    let popUpText = "";
    let icon      = "";

    if(totalScorePlayer > totalScoreOpponent)
    {
        popUpText = "You Won! ";
        icon      = faceSmile;
    }
    else if(totalScorePlayer < totalScoreOpponent)
    {
        popUpText = "You Lost! ";
        icon      = skull;
    }
    else
    {
        popUpText = "You Draw! ";
        icon      = faceMeh;
    }

    $popUp.find("p").text(popUpText).append(icon);
    $popUp.fadeIn(DURATION_ANIMATION)
}

function newGame()
{
    totalScorePlayer   = 0;
    scorePlayer        = 0;
    totalScoreOpponent = 0;
    scoreOpponent      = 0;
    numRounds          = 0;

    $dice1Player.find("img").remove();
    $dice2Player.find("img").remove();
    $dice1Opponent.find("img").remove();
    $dice2Opponent.find("img").remove(); 

    $('#score-player p').text(scorePlayer);
    $('#total-score-player p').text(totalScorePlayer);
    $('#score-opponent p').text(scoreOpponent);
    $('#total-score-opponent p').text(totalScoreOpponent);
}