const coloresBg = [
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
    "#1c0227",
    "#f7bb16",
    "#e48b07",
    "#547699",
    "#183d62",
    "#642e2e",
    "#3bbcca",
    "#781a9d"
];

function coloresRandom() {
    const indexRandom = Math.floor(coloresBg.length * Math.random());
    return indexRandom
}

const body = document.querySelector('.body');
const spanColor = document.querySelector('.bg-color');

function cambiarColor() {
    const color = coloresBg[coloresRandom()];

    spanColor.innerText = color;
    body.style.backgroundColor = color;
}

const btn = document.querySelector('.btn')
btn.onclick = cambiarColor;

