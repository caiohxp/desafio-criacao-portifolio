const btncaixa = document.querySelector('.buttonForm:nth-child(3)');
btncaixa.addEventListener("mouseover", envelope);
btncaixa.addEventListener("mouseout", envelope);
function envelope(){
    btncaixa.children[0].classList.toggle("bi-envelope");
    btncaixa.children[0].classList.toggle("bi-envelope-open");
}