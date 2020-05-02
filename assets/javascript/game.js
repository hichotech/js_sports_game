let resetcontainer = document.querySelector("#reset-container");
let resetsnum = document.querySelector ("#num-resets");
let team1goals = document.querySelector ("#teamone-numgoals");
let team1shotsnum = document.querySelector ("#teamone-numshots"); 
let team1shot = document.querySelector ("#teamone-shoot-button");




resetcontainer.addEventListener ("click", function (){
    let newresetsnum = Number(resetsnum.innerHTML) + 1;
    resetsnum.innerHTML= newresetsnum;
})

team1shot.addEventListener ("click", function (){
    if (Math.random() * 100 < 70){
        let newteam1goals = Number(team1goals.innerHTML) + 1;
    team1goals.innerHTML= newteam1goals;

    }
    let newteam1shotsnum = Number(team1shotsnum.innerHTML) + 1;
    team1shotsnum.innerHTML= newteam1shotsnum;
    
    
})

