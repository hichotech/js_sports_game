let resetcontainer = document.querySelector("#reset-container");
let resetsnum = document.querySelector ("#num-resets");
let team1goals = document.querySelector ("#teamone-numgoals");
let team1shotsnum = document.querySelector ("#teamone-numshots"); 
let team1shot = document.querySelector ("#teamone-shoot-button");

let team2goals = document.querySelector ("#teamtwo-numgoals");
let team2shotsnum = document.querySelector ("#teamtwo-numshots");
let team2shot = document.querySelector ("#teamtwo-shoot-button");

let winner = document.querySelector("#winner");

let team1kick = new Audio();
team1kick.src = "assets/sounds/FOOTBALLKICK.wav";

let team2kick = new Audio();
team2kick.src = "assets/sounds/FOOTBALLKICK.wav";

let winnersound = new Audio();
winnersound.src = "assets/sounds/winner.wav";

resetcontainer.addEventListener ("click", function (){
    let newresetsnum = Number(resetsnum.innerHTML) + 1;
    resetsnum.innerHTML= newresetsnum;

    winnersound.play();

    if (team1goals.innerHTML>team2goals.innerHTML){
        winner.innerHTML="team 1 won"}
    if (team2goals.innerHTML>team1goals.innerHTML){
            winner.innerHTML="team 2 won" 
        }
    
    if (team1shotsnum.innerHTML >= 1){
        team1shotsnum.innerHTML=0;
    }
    if (team2shotsnum.innerHTML >= 1){
     team2shotsnum.innerHTML=0;
 }
 if (team2goals.innerHTML >= 1){
     team2goals.innerHTML=0;
 }
 if (team1goals.innerHTML >= 1){
     team1goals.innerHTML=0;
 }
 
})

team1shot.addEventListener ("click", function (){
    if (Math.random() * 100 < 70){
        let newteam1goals = Number(team1goals.innerHTML) + 1;
    team1goals.innerHTML= newteam1goals;  
    }
    let newteam1shotsnum = Number(team1shotsnum.innerHTML) + 1;
    team1shotsnum.innerHTML= newteam1shotsnum;
    team1kick.play();
       
})
team2shot.addEventListener ("click", function (){
    if (Math.random() * 100 < 70){
        let newteam2goals = Number(team2goals.innerHTML) + 1;
    team2goals.innerHTML= newteam2goals;

    }
    let newteam2shotsnum = Number(team2shotsnum.innerHTML) + 1;
    team2shotsnum.innerHTML= newteam2shotsnum;
    team2kick.play();
    
})

