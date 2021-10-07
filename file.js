const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav--menu');
burger.addEventListener('click', burgertoggle);

function burgertoggle() {
    burger.classList.toggle('toggle');
    navigation.classList.toggle('show--nav--menu');

}