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
    alert("Mensagem Enviada");
}
function removeAllMessages() {
    localStorage.removeItem("dados");
}

const modal = document.querySelector('#messages-modal .modal-dialog .modal-content .modal-body');
const tbody = document.querySelector('#messages-modal .modal-dialog .modal-content .modal-body table tbody');
const p = document.querySelector('#messages-modal .modal-dialog .modal-content .modal-body p');
const messageList = JSON.parse(localStorage.getItem("dados"));
messageList.forEach(mensagemItem => {
    const tr = document.createElement('tr');
    const assunto = document.createElement('td');
    const nome = document.createElement('td');
    const mensagem = document.createElement('div');
    mensagem.classList.toggle("message-open--display");
    tr.addEventListener("click", () => {
        tr.classList.toggle("message-open");
        mensagem.classList.toggle("message-open--display");
    })
    assunto.innerHTML = mensagemItem.assunto;
    nome.innerHTML = mensagemItem.nome;
    mensagem.innerHTML = mensagemItem.mensagem;
    tr.appendChild(nome);
    tr.appendChild(assunto);
    tr.appendChild(mensagem);
    tbody.appendChild(tr);
    modal.removeChild(p);
});