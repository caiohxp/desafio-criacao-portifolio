function enviarMensagem() {
    const dados = {
        nome: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        assunto: document.querySelector('#assunto').value,
        mensagem: document.querySelector('#mensagem').value
    }
    var mensagens = localStorage.getItem("dados") ? JSON.parse(localStorage.getItem("dados")) : [];
    mensagens.push(dados);
    localStorage.setItem("dados", JSON.stringify(mensagens));
    alert("Mensagem Enviada!");
}
function removeAllMessages() {
    localStorage.removeItem("dados");
}

const modal = document.querySelector('#messages-modal .modal-dialog .modal-content .modal-body');
const tbody = document.querySelector('#messages-modal .modal-dialog .modal-content .modal-body table tbody');
const p = document.querySelector('#messages-modal .modal-dialog .modal-content .modal-body p');
const messageList = JSON.parse(localStorage.getItem("dados"));
messageList.forEach(mensagemItem => {
    const trcabecalho = document.createElement('tr');
    const trmessage = document.createElement('tr'); 
    const assunto = document.createElement('td');
    const nome = document.createElement('td');
    const corpomensagem = document.createElement('td');
    const email = document.createElement('p');
    const mensagem = document.createElement('p');
    corpomensagem.classList.toggle("message-open--display");
    trcabecalho.addEventListener("click", () => {
        trcabecalho.classList.toggle("message-open");
        corpomensagem.classList.toggle("message-open--display");
    })
    assunto.setAttribute("colspan", "1");
    nome.setAttribute("colspan", "1");
    corpomensagem.setAttribute("colspan", "2");
    assunto.innerText = mensagemItem.assunto;
    nome.innerText = mensagemItem.nome;
    email.innerText = mensagemItem.email;
    mensagem.innerText = mensagemItem.mensagem;
    trcabecalho.appendChild(nome);
    trcabecalho.appendChild(assunto);
    corpomensagem.appendChild(email);
    corpomensagem.appendChild(mensagem);
    trmessage.appendChild(corpomensagem);
    tbody.appendChild(trcabecalho);
    tbody.appendChild(trmessage);
    modal.removeChild(p);
});