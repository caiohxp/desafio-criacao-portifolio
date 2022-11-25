const itensMenu = document.querySelectorAll('.nav-item');
const section = Array.from(document.querySelectorAll('section'));
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll < heightSections(1)) {
        itensMenu.forEach((i, n) => {
            n === 0 ? i.classList.add('active') : i.classList.remove('active')
        })
    }
    else if (scroll < heightSections(2)) {
        itensMenu.forEach((i, n) => {
            n === 1 ? i.classList.add('active') : i.classList.remove('active')
        })
    } else if (scroll < heightSections(3)) {
        itensMenu.forEach((i, n) => {
            n === 2 ? i.classList.add('active') : i.classList.remove('active')
        })
    } else if (scroll < heightSections(4)) {
        itensMenu.forEach((i, n) => {
            n === 3 ? i.classList.add('active') : i.classList.remove('active')
        })
    } else if (scroll < heightSections(5)) {
        itensMenu.forEach((i, n) => {
            n === 4 ? i.classList.add('active') : i.classList.remove('active')
        })
    } else if (scroll < heightSections(6)) {
        itensMenu.forEach((i, n) => {
            n === 5 ? i.classList.add('active') : i.classList.remove('active')
        })
    } else {
        itensMenu.forEach((i, n) => {
            n === 6 ? i.classList.add('active') : i.classList.remove('active')
        })
    }
});
window.onresize = function () {
    location.reload();
};

function heightSections(x) {
    return section.slice(0, x).reduce((a, b) => {
        return a + b.clientHeight
    }, 0) - 50
}