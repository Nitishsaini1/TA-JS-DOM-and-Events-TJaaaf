let box1 = document.querySelector('.first');
let box2 = document.querySelector('.second');

function generaterandomcolor(){
    let hexcharacter = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let color = "#";
    for (let i =0 ; i < 6; i++){
        let randomNumber = Math.floor(Math.random()*16 );
     color = color + hexcharacter[randomNumber];
     }
    return color;
    }

    function handleClick(){
        // 1. generate random color
        let randomcolor =  generaterandomcolor ();
        // 2. change the background color of the box  
        box1.style.background = randomcolor;

    }
    function handlemousemove(){
        // 1. generate random color
        let randomcolor =  generaterandomcolor ();
        // 2. change the background color of the box  
        box2.style.background = randomcolor;

    }

box1.addEventListener('click' , handleClick);
    
box2.addEventListener('mousemove' , handlemousemove);

