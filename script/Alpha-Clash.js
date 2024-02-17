// function play(){
//     // hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection=document.getElementById('home-screen')
//     homeSection.classList.add('hidden');

//     //show the play ground
//     const playGroundSection=document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden');
// }
function handleKeyboardKeyUpEvent(event){
    const playerPressed=event.key;
    console.log('player pressed',playerPressed);
    //stop the game if pressed 'esc'
   if(playerPressed==="Enter"){
    gameOver();
   };

    //get the expected to press 
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet=currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);   
    //check match or not
    if(playerPressed===expectedAlphabet){
        console.log('you got a point!');

        const currentScore=getTextElementValueById('current-score');
        const updatedScore=currentScore+1;
        setTextElementValueById('current-score',updatedScore);


        //update score:
        //1.get the current score
        // const currentScoreElemnet=document.getElementById("current-score");
        // const currentScoreText=currentScoreElemnet.innerText;
        // const currentScore=parseInt(currentScoreText);
        // console.log(currentScore);
        // //2.increse the score by 1
        // const newScore=currentScore+1
        // //3.show the updated score
        // currentScoreElemnet.innerText =newScore;

        //start a new round
        console.log('you have pressed correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }else{
        console.log("dhurr baiya ba apu right key press kor");

        const currentLife=getTextElementValueById('current-life');
        const updatedLife=currentLife-1;
        setTextElementValueById('current-life',updatedLife);

        if(updatedLife === 0){
           gameOver();
        }
        //get the current life number
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // //reduce the life count
        // const newLife=currentLife-1;
        // //display the updated life count
        // currentLifeElement.innerText=newLife;

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
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    //reser score and life 
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame();
}

function gameOver(){
hideElementById('play-ground');
showElementById('final-score');
//update the final score
//get the final score
const lastScore = getTextElementValueById('current-score');
console.log(lastScore);
setTextElementValueById('last-score',lastScore);

//clear the last selected alphabet highlight
const currentAlphabet=getElementTextById('current-alphabet');
removeBackgroundColorById(currentAlphabet); 
}