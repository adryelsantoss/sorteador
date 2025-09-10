console.log("Start")


function sortearNumero() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const resultDiv = document.getElementById("result")

    if (max > min) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        showResult(`O NÚMERO SORTEADO FOI: ${result}`);
        confettiParty();
    }
    else {
        alert("DIGITE O MENOR NÚMERO NO 1º CAMPO")
    }
}

function showResult(texto) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = texto;
    resultDiv.style.display = 'block';

    setTimeout(() => {
        resultDiv.style.opacity = 1;
    }, 50);

    setTimeout(() => {
        resultDiv.style.opacity = 0;
        setTimeout(() => {
            resultDiv.style.display = 'none';
        }, 500);
    }, 10000);
}

function confettiParty() {
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const colors = ['#FFFF00', '#0000FF', '#FFFFFF'];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 100,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 100,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    })();
}
