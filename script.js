const passwordBox = document.getElementById("password");
const lenght = 12;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789";
const symbol = "!@#$%^&*(_+/*=<>~-{[}]";

const allChars = upperCase + lowerCase + number + symbol;

function ceratPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];


    while(lenght > password.length){
       password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
    console.log(passwordBox.value);
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}