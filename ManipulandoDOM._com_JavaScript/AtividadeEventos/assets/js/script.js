
const darkModeClass = 'dark-mode';
const button = document.getElementById('modo-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

function changeMode(){
    //console.log('Cliquei');
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);

}

function changeText(){
    const darkMode = 'Dark Mode';
    const ligthMode = 'Ligth Mode';

    if(button.classList.contains(darkModeClass)){
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + "ON";
        return;

    }

    button.innerHTML = darkMode;
    h1.innerHTML = ligthMode + "ON";
}



//console.log(button);

button,addEventListener('click', changeMode);