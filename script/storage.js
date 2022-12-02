function enviarMensagem(){
    const nome = document.querySelector('#nome');
    const email = document.querySelector('#email');
    const assunto = document.querySelector('#assunto');
    const mensagem = document.querySelector('#mensagem');
    localStorage.setItem("nome",nome.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("assunto",assunto.value);
    localStorage.setItem("mensagem",mensagem.value");
}