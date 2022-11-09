const menuDrop = document.querySelector('.menuDropdown');

menuDrop.addEventListener('click', toggleMenu);
function toggleMenu(){
    const menuDrop1 = document.querySelector('#menuDropdown1');
    const menuDrop2 = document.querySelector('#menuDropdown2');
    const menuDrop3 = document.querySelector('#menuDropdown3');
    menuDrop1.classList.toggle('active')
    menuDrop2.classList.toggle('active')
    menuDrop3.classList.toggle('active')
    menuDrop1.classList.toggle('animationdrop1')
    menuDrop2.classList.toggle('animationdrop1')
    menuDrop3.classList.toggle('animationdrop3')
}
