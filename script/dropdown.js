function toggleMenu(){
    const menuDrop = document.querySelector('.menuDropdown');
    
    menuDrop.addEventListener('click', toggleMenu);
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');   
}
