const gato = document.querySelector('.gato');
const rato = document.querySelector('.rato');

const jump = () => {
    gato.classList.add('jump');

    setTimeout(() => {
        gato.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {

    const ratoPosition = rato.offsetLeft;
    const gatoPosition = +window.getComputedStyle(gato).bottom.replace('px', '');


    if (ratoPosition <= 120 && ratoPosition > 0 && gatoPosition < 60) {

        rato.style.animation = 'none';
        rato.style.left = `${ratoPosition}px`;

        gato.style.animation = 'none';
        gato.style.bottom = `${gatoPosition}px`;

        gato.src = './imagem/game-over-insert-coins.gif';
        gato.style.width = '100%'

        clearInterval(loop);

        
    }

}, 10);

document.addEventListener('keydown', jump);
