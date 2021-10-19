const buttonDrawer = document.getElementById('buttonDrawer');
const navDrawer = document.querySelector('#navDrawer');
const main = document.querySelector('main');

buttonDrawer.addEventListener('click', function() {
    navDrawer.classList.add('open');
});

main.addEventListener('click', function() {
    navDrawer.classList.remove('open');
});