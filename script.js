const nav = document.querySelector('.navbar');
const hero = document.getElementById('hero');
const drop_click = document.getElementById('dropdown-click');
const drop = document.getElementById('dropdown-nav');

window.addEventListener('scroll', nav_fix);
drop_click.addEventListener('click', drop_function);

function nav_fix() {
	nav.classList.toggle('scrolled', window.scrollY > 0);
	nav.classList.toggle('fixed', window.scrollY > 0);
	hero.classList.toggle('mt-20', window.scrollY > 0);
}

function drop_function() {
	drop.classList.toggle('flex');
	drop.classList.toggle('hidden');
}
