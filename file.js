const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav--menu');
const userinput = document.querySelector('.input--box');
const inputerrortext = document.querySelector('.input--error--text');
const btnshortner = document.querySelector('.btn--shorten');
const inputplaceholder = document.querySelector('.input--box').placeholder;
burger.addEventListener('click', burgertoggle);

function burgertoggle() {
    burger.classList.toggle('toggle');
    navigation.classList.toggle('show--nav--menu');

}
btnshortner.addEventListener('click', shortner);

function shortner(e) {
    if (userinput.value === "") {
        userinput.classList.add('input--box--red');
        userinput.classList.add('red');
        inputerrortext.style.visibility = 'visible';
        inputplaceholder.style.color = '#F46363';
    }
}