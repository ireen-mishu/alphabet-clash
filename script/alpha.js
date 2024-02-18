function play(){
    // step:1 hide the home screen.to hide the screen add the class hidden to the home section.
    const homeSection =document.getElementById('home-screen');
    // console.log(homeSection.classList);
    homeSection.classList.add('hidden');
    // show the playground //
    const playgroundSection = document.getElementById('play-ground');
    // console.log(playgroundSection.classList);
    playgroundSection.classList.remove('hidden');
    continueGame();
}


function continueGame(){
    // step-1:generate a random alphabet
    const alphabet=getARandomAlphabet();
    console.log('your random alphabet',alphabet);

    // set randomly generated alphabet to the screen(show it)
    const currentAlphabetElement =document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}



function getARandomAlphabet(){
    // get or create an alphabet array

    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetString.split('');
    // console.log(alphabets);


    // get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    
    const alphabet =alphabets[index];
    // console.log(index ,alphabet);
    return alphabet;
}