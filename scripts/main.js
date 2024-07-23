const $game   = $("#game");
const players = ["player", "opponent"]; 

players.forEach( player => {
    $game.append(createPlayer(player));
})


function createPlayer(player)
{
    const element = 
    `<div id="${player}">
        <h4>${toTitleCase(player)}</h4>
        <div>
            <h5>${toTitleCase(player)}'s Dice</h5>
            <div>
                <div>
                    <h6>Dice #1</h6>
                </div>
                <div>
                    <h6>Dice #2</h6>
                </div>
            </div>
        </div>
        <div>
            <h5>${toTitleCase(player)}'s Score</h5>
            <div>
                <div>
                    <h6>Score this Round</h6>
                    <p>0</p>
                </div>
                <div>
                    <h6>Total Score</h6>
                    <p>0</p>
                </div>
            </div>
    </div>`

    return element
}