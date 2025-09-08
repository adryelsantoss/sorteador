console.log("Start")


function sortearNumero() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (max > min) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(`O NÚMERO SORTEADO FOI: ${result}`);

    }
    else {
        alert("DIGITE O MENOR NÚMERO NO 1º CAMPO")
    }


}
