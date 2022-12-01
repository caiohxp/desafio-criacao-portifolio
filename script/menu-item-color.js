const itensMenu = document.querySelectorAll('.nav-item');
const section = Array.from(document.querySelectorAll('section'));
const cor = "#14FFEC";
window.addEventListener("load", scrollspy);
window.addEventListener("scroll", scrollspy);
window.onresize = function () {
    location.reload();
};
function scrollspy(){
    let scroll = this.scrollY;
    if (scroll < heightSections(1)) {
        itensMenu.forEach((i, n) => {
            n === 0 ? i.style.color = cor : i.style.color = "#fff"
        })
    }
    else if (scroll < heightSections(2)) {
        itensMenu.forEach((i, n) => {
            n === 1 ? i.style.color = cor : i.style.color = "#fff"
        })
    } else if (scroll < heightSections(3)) {
        itensMenu.forEach((i, n) => {
            n === 2 ? i.style.color = cor : i.style.color = "#fff"
        })
    } else if (scroll < heightSections(4)) {
        itensMenu.forEach((i, n) => {
            n === 3 ? i.style.color = cor : i.style.color = "#fff"
        })
    } else if (scroll < heightSections(5)) {
        itensMenu.forEach((i, n) => {
            n === 4 ? i.style.color = cor : i.style.color = "#fff"
        })
    } else if (scroll < heightSections(6)) {
        itensMenu.forEach((i, n) => {
            n === 5 ? i.style.color = cor : i.style.color = "#fff"
        })
    } else {
        itensMenu.forEach((i, n) => {
            n === 6 ? i.style.color = cor : i.style.color = "#fff"
        })
    }
}
function heightSections(x) {
    return section.slice(0, x).reduce((a, b) => {
        return a + b.clientHeight
    }, 0) - 50
}