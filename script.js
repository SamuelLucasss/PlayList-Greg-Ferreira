const musica = document.getElementById("track");
const botaoPlayPause = document.getElementById("btn-play-pause");
const botaoAvancar = document.getElementById("btn-proximo");
const botaoAnterior = document.getElementById("btn-anterior");
const nomeMusicaAtual = document.getElementById("nome-track");

let musicaOff = true;
let musicaAtual = 1;

alert("Curta sem moderação a PlayList XERECRAZY 😈");

function tocarMusica (){
    musica.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarMusica (){
    musica.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar (){
    if (musicaOff === true){
        tocarMusica();
        musicaOff = false;
    } else {
        pausarMusica();
        musicaOff = true;
    }
}

function proximaMusica (){
    if (musicaAtual === 10){
        musicaAtual = 1;
    } else {
        musicaAtual = musicaAtual + 1;
    }

    musica.src = "./music/track-" + musicaAtual + ".mp3";
    tocarMusica();
    trocarNomeMusica();
}

function voltarMusica (){
    if (musicaAtual === 1){
        musicaAtual = 10;
    } else {
        musicaAtual = musicaAtual - 1;
    }

    musica.src = "./music/track-" + musicaAtual + ".mp3";
    tocarMusica();
    trocarNomeMusica();
}

function trocarNomeMusica (){
    nomeMusicaAtual.innerText = "Track " + musicaAtual;
}



botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaMusica);
botaoAnterior.addEventListener('click', voltarMusica);