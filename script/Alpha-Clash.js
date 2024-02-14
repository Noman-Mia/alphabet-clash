// function play(){
//     // hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection=document.getElementById('home-screen')
//     homeSection.classList.add('hidden');

//     //show the play ground
//     const playGroundSection=document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden');
// }
function continueGame(){
//step-1:generate a random alphabet
const alphabet=getARandomAlphabet();
console.log('your random alphabet:',alphabet);
// set rendomley genarate alphabet to the screen(show it)
const currentAlphabetElement=document.getElementById('current-alphabet')
currentAlphabetElement.innerText=alphabet;
setBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}