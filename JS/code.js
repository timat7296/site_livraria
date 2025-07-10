//1- usuario clica no botão whasapp - executa função enviaMsg

const showMessage = () => {
    var divMessage = document.getElementById("whatsmensagem");

    var propDisplay = window.getComputedStyle(divMessage).display;
    //2 - verifica se a propriedade display é "none" 
    if (propDisplay == 'none') {
        divMessage.style.display = 'block';
    } else {
        divMessage.style.display = 'none';
    }
}
//3se valor for "none" modifica para block
//4caso contrario  modifica para none */

// envia menssagem para um numero de whatsapp

const enviarMsg = () => {
    const numero = 5512997003371;
    const mensagem = document.getElementById('msg').value;

    //aumentar a taxa de segurança do si
    const msgCodificada = encodeURIComponent(mensagem);



    // evita o envio se a caixa de texto estiver vazia 
    if (mensagem == '') {
        alert('por favor digite uma mensagem!');

        //interronpe a função 
        return;
    }
    // concatenação usando interpolação de variavel ${variavel}


    const url = `https://wa.me/${numero}?${msgCodificada}`;
    // Abre a url do whatapp com os parâmetros passados
    window.open(url, '_blank');

} 
