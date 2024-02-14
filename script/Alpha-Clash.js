function play(){
    // hide the home screen. to hide the screen add the class hidden to the home section
    const homeSection=document.getElementById('home-screen')
    homeSection.classList.add('hidden');

    //show the play ground
    const playGroundSection=document.getElementById('play-ground')
    playGroundSection.classList.remove('hidden');
}