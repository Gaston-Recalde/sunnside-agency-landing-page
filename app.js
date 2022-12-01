const hamburguer = document.querySelector('.nav__hamburguer');
const menu = document.querySelector('.nav__links');
const menu_triangle = document.querySelector('.triangle');

hamburguer.addEventListener('click', () => {
    console.log('click');
    if( menu.className === 'nav__links' ) {
        menu.className = 'visible';
        menu_triangle.className = 'triangle--active';
    } else {
        menu.className = 'nav__links';
        menu_triangle.className = 'triangle';
    }
});