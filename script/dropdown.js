const menuDrop = document.querySelector('.menuDropdown');

menuDrop.addEventListener('click', toggleMenu);
function toggleMenu(){
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');   
}