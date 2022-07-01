let form = document.querySelector("form");
let userInfo = {};
let errorMessage = {};
let confirmError = "";



function displayError(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessage[name];
    elm.parentElement.classList.add("error");

}

function displaySuccesss(name){
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = "";
    elm.parentElement.classList.remove("error");
    elm.parentElement.classList.add("success");
    errorMessage[name] = "";
}

function handleInputs(event){
    event.preventDefault();
    let elements = event.target.elements;
    const username = elements.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    let passwordElm = event.target.elements.password;
    let confirmElm = event.target.elements.confirmpassword

    let parentElm = confirmElm.parentElement;

    if(username.length <=4){
        errorMessage.username = "username can't be less than 4 characters";
        displayError("username");
    } else {
        displaySuccesss("username");
        
    } if (passwordElm.value !== confirmElm.value){
        confirmError = "Password and confirm password should be same ";
        parentElm.classList.add("error");
    } else {
        confirmError = "";
        parentElm.classList.add("success")
        parentElm.classList.remove("error")
    }

    confirmElm.nextElementSibling.innerText = confirmError;
}


form.addEventListener("submit", handleInputs);
