const menuDrop = document.querySelector('.menuDropdown');

menuDrop.addEventListener('click', toggleMenu);
function toggleMenu(){
    const menu = document.querySelector('.menu');
    const menuLista = document.querySelector('.menuLista');
    const menuDrop1 = document.querySelector('#menuDropdown1');
    const menuDrop2 = document.querySelector('#menuDropdown2');
    const menuDrop3 = document.querySelector('#menuDropdown3');
    menu.classList.toggle('active')
    menuLista.classList.toggle('active')
    menuDrop1.classList.toggle('animationdrop1')
    menuDrop2.classList.toggle('animationdrop1')
    menuDrop3.classList.toggle('animationdrop3')
}