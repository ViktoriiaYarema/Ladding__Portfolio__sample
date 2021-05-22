const btnOpenMenu = document.getElementById('btn_open');
const btnCloseMenu = document.getElementById('btn_close');
const menu = document.getElementById('menu');

btnOpenMenu.addEventListener('click', function() {
    menu.classList.add('active');

});
btnCloseMenu.addEventListener('click', function() {
    menu.classList.remove('active');

});

