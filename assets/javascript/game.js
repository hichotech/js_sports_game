let resetcontainer = document.querySelector("#reset-container");
let resetsnum = document.querySelector ("#num-resets")


resetcontainer.addEventListener ("click", function (){
    
    
    let newresetsnum = Number(resetsnum.innerHTML) + 1;
    resetsnum.innerHTML= newresetsnum;
})

