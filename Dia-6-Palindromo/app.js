function evaluar(e) {
    e.preventDefault()
    const textDisplay = document.querySelector(".resultado");
    const textInput = document.querySelector(".palabra").value;
    let re = /[\W_]/g;
    const palabraInvertida = textInput.toLowerCase().replace(re, "");
    const palabraReversa = palabraInvertida.split("").reverse().join('')

    if (palabraInvertida === palabraReversa && palabraInvertida.length > 0) {
        textDisplay.innerText = `${textInput} es un palindromo`;
    } else if (textInput.trim() === "") {
        textDisplay.innerText = "Escribe una palabra";
    } else {
        textDisplay.innerText = `${textInput} no es un palindromo`;
    }
}

document.querySelector(".enviar").addEventListener("click", evaluar)













