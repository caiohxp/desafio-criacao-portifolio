const menuDrop = document.querySelector('.menuDropdown');
function toggleMenu(){
    const menuDrop1 = document.querySelector('.menuDropdown');
    menuDrop1.classList.toggle('active')
}
menuDrop.addEventListener('click', toggleMenu);