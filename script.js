const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCaptulos = 10;

let taTocando = 0;

let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-fill');
    botaoPlayPause.classList.add('bi-pause-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-fill');
    botaoPlayPause.classList.add('bi-play-fill');
}

function tocarOuPausar() {
    if (taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    } else{
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}
function proximaFaixa() {
    if (capituloAtual === numeroCaptulos){
        capituloAtual = 1;
    } else {
    capituloAtual = capituloAtual + 1
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function faixaAnterior() {
    if (capituloAtual === 1){
        capituloAtual = numeroCaptulos;
    } else {
    capituloAtual = capituloAtual - 1
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}



botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', faixaAnterior);
