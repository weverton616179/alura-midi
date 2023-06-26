function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if(elemento != null && elemento.localName === 'audio') { // '!=' = diferente   && = and, e
        elemento.play();
    }
    else {
        console.log('titoma no cu de elemento rapa')
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

// para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;  //template string

    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(evento) {

        console.log(evento.code === 'Space' || evento.code === 'Enter')

        if(evento.code === 'Space' || evento.code ==='Enter') {
                    tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}