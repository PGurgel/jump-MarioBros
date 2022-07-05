const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameover = document.querySelector('.game-over');
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.left = `${cloudsPosition}px`;
        clouds.style.animation = 'none';

        gameover.style.display = 'block';

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = '/img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10);
