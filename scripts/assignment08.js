const startButton = document.getElementById("start-button");
const stopButton  = document.getElementById("stop-button");
const popUp       = document.querySelector(".pop-up");
const closePopup  = document.getElementById("close-popup");
const bikeImage   = document.getElementById("main-image");

const DELAY           = 3000; // 3 seconds
const ANIMATION_DELAY = 100; // 100 milliseconds;

let  timerHandler;
let  animationHandler;
let  timerAnimationHandler;
let  moveRight = true;
let  position  = 1;

closePopup.addEventListener("click", function(){
    popUp.style.display = "none";
})

timerHandler = setTimeout(function(){
    popUp.style.opacity = "1";
}, DELAY);

startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation)

function startAnimation()
{
    clearTimeout(timerHandler);
    animationHandler = requestAnimationFrame(move);
}

function stopAnimation()
{
    cancelAnimationFrame(animationHandler);
    clearTimeout(timerAnimationHandler);
}

function move()
{
    stopAnimation();
    timerAnimationHandler = setTimeout(function(){
        if(moveRight)
            {
                position++;
                if(position === 34)
                {
                    moveRight = false;
                }
            }
        else
            {
                position--;
                if(position === 1)
                {
                    moveRight = true;
                }
            }
        
        updateImagePath(bikeImage, position, "bike");
        animationHandler = requestAnimationFrame(move);
    }, ANIMATION_DELAY)
}