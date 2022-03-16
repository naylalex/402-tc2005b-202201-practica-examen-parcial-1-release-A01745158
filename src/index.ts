import './style.css';
import isPalindrome from '../checker'; /*o solo un punto*/

console.log("index.ts/start");
//Obtener referencia a inputText
const inputText = <HTMLInputElement>document.getElementById('inputText');
let bPalindrome = null;
if (inputText) {
    //Invocando a la función isPalindrome
    bPalindrome = isPalindrome(inputText.value);
    console.log(bPalindrome);
}

//Actualizar divResult
const divResult = <HTMLDivElement>document.getElementById('divResult');
if (divResult){
    
}