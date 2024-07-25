class DiceSet 
{
    constructor()
    {
         this.dices = [];
    }

    addDice(dice)
    {
        if(dice instanceof Dice)
        {
            this.dices.push(dice);
        }
        else
        {
            console.log("Only instances of Dice can be added");
        }
    }

    getRandomDice()
    {
        const randomIndex = Math.floor(Math.random() * this.dices.length);
        return this.dices[randomIndex];
    }
}