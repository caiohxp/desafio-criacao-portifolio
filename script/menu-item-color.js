const cor = "crimson";
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    const itensMenu = document.querySelectorAll('.menuItem')
    var windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    if(scroll < windowHeight){
        itensMenu.forEach((i,n) => {
            n === 0 ? i.classList.add('active') : i.classList.remove('active')
        })
    }
    else if(scroll < (windowHeight*2)){
        itensMenu.forEach((i,n) => {
            n === 1 ? i.classList.add('active') : i.classList.remove('active')
        })
    } else if(scroll< (windowHeight*3)){
        itensMenu.forEach((i,n) => {
            n === 2 ? i.classList.add('active') : i.classList.remove('active')
        })
    } else if(scroll < (windowHeight*4)){
        itensMenu.forEach((i,n) => {
            n === 3 ? i.classList.add('active') : i.classList.remove('active')
        })
    } else if(scroll < (windowHeight*5)){
        itensMenu.forEach((i,n) => {
            n === 4 ? i.classList.add('active') : i.classList.remove('active')
        })
    } else if(scroll < (windowHeight*6)){
        itensMenu.forEach((i,n) => {
            n === 5 ? i.classList.add('active') : i.classList.remove('active')
        })
    } else{
        itensMenu.forEach((i,n) => {
            n === 6 ? i.classList.add('active') : i.classList.remove('active')
        })
    }
});
window.onresize = function(){
    location.reload();
 };