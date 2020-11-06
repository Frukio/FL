import './scss/app.scss';

const burger = document.querySelector('.header__burger');
const navMob = document.querySelector('.nav-mob');

burger.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('header__burger--active');
    navMob.classList.toggle('nav-mob--active');
});