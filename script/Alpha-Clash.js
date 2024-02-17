// function play(){
//     // hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection=document.getElementById('home-screen')
//     homeSection.classList.add('hidden');

//     //show the play ground
//     const playGroundSection=document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden');
// }
function handleKeyboardKeyUpEvent(event){
    const playerPressed=event.key
    console.log('player pressed',playerPressed);

    //get the expected to press 
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet=currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);   
    //check match or not
    if(playerPressed===expectedAlphabet){
        console.log('you got a point!');
        //update score:
        //1.get the current score
        const currentScoreElemnet=document.getElementById("current-score");
        const currentScoreText=currentScoreElemnet.innerText;
        const currentScore=parseInt(currentScoreText);
        console.log(currentScore);
        //2.increse the score by 1
        const newScore=currentScore+1
        //3.show the updated score
        currentScoreElemnet.innerText =newScore;

        //start a new round
        console.log('you have pressed correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }else{
        console.log("dhurr baiya ba apu right key press kor");
    }
}

document.addEventListener('keyup',handleKeyboardKeyUpEvent); 

function continueGame(){
//step-1:generate a random alphabet
const alphabet=getARandomAlphabet();
// console.log('your random alphabet:',alphabet);
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