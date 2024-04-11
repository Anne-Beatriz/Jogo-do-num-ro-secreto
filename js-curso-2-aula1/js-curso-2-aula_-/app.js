let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p','escolha um número de 1 a 10');

}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    
    if (chute == numerosecreto) {
        exibirTextoNaTela('h1', 'acertou!');

        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;

        exibirTextoNaTela('p', mensagemTentativas);

       document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if (chute > numerosecreto){
            exibirTextoNaTela('p','O número é menor');    
        } else{
            exibirTextoNaTela('p', 'numéro é maior');
        }
        tentativas++;
        limparCampo();
     }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumeroSorteados.length;

if (quantidadeElementosNaLista == numeroLimite ){
    listaDeNumeroSorteados =[];
}
   
   if (listaDeNumeroSorteados.includes(numeroEscolhido)){
  return gerarNumeroAleatorio();  
   } else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numerosecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable',true)
}