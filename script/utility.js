function hideElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden');
};
function showElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function getARandomAlphabet(){
    //get and create an alphabet array
    const alphabetString='a b c d e f g h i j k l m n o p q r s t u v w x y z';
    const alphabets=alphabetString.split(' ')
   
    //get a random index between 0-25
    const randomNumber=Math.random()*25;
    const index= Math.round(randomNumber);

    const alphabet=alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}