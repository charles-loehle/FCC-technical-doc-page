const menu = document.querySelector('#menu');
const main = document.querySelector('#main-doc');
const navbar = document.querySelector('#navbar');

menu.addEventListener('click', e => {
	navbar.classList.toggle('open');
	e.stopPropagation();
});
main.addEventListener('click', () => {
	navbar.classList.remove('open');
});
