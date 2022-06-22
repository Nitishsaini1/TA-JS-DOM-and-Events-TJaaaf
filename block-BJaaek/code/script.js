let box1 = document.querySelector('.first');
let box2 = document.querySelector('.second');

function colorchanging(){
    var b = Math.floor(Math.random()*200);
    var a = Math.floor(Math.random()*200);
    var c = Math.floor(Math.random()*200);
    var bgcolor = "rgb(" + a + ", " + b + ", " + c + ")";
    return bgcolor;
}

box1.addEventListener('click' , function(){
    box1.style.background = colorchanging();
});
    
box2.addEventListener('mousemove' , function(){
    box2.style.background = colorchanging();  
});

