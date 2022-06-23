let box = document.querySelector('.boxes');

// random numbers and their boxes 
// random colors 
// changing color in every single box while moving mouse

//  1. random number 

for (let i=0; i<500; i++){
    let smallBox = document.createElement("div");
    smallBox.className = "small-box";
    smallBox.textContent = `${Math.floor(Math.random() * 500)}`;
    box.append(smallBox);

}

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    // return `rgb(${Math.floor(math.random() * 255)})`;

}

function handler(){
    let smallBox = document.querySelectorAll(".small-box");
    smallBox.forEach((element) => {
         element.textContent = `${Math.floor(Math.random() * 500)}`;
         element.getElementsByClassName.backgroundColor = getRandomColor();
    });
}    

box.addEventListener("mousemove", handler);
