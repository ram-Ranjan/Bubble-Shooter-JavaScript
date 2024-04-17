var timer = 60;
let score=0;
var hitRn=0;

//Event Bubblling-> When clicked -> event raise
//                   If event absent ->goto parent ->parent -> parent



function getNewHit()
{
     hitRn= Math.floor(Math.random()*10)
    document.querySelector("#hitVal").textContent=hitRn

}

function increaseScore(){  
    score+=10
    document.querySelector("#scoreValue").textContent=score
}

function makeBubble()
{
    let clutter =""
for(let i=0;i<102;i++)
{
    let random=Math.floor(Math.random()*10)
    clutter += `<div class="bubble"> ${random}  </div>`

}


document.querySelector("#btm").innerHTML=clutter
}



function runTimer(){
   var timerInt= setInterval(function(){
        if(timer>0){
            timer--
            document.querySelector('#timerValue').textContent=timer;

        }
        else {
            document.querySelector("#btm").innerHTML=`<h1>Game Over!!!</h1>`;
            clearInterval(timerInt);
            
                }
    },1000);
}

document.querySelector("#btm")
.addEventListener("click",function(details){
    var clickedNum=Number(details.target.textContent)
    if(clickedNum === hitRn)
    {
        increaseScore();
        makeBubble();
getNewHit();
    }
})

runTimer()
makeBubble();
getNewHit();

