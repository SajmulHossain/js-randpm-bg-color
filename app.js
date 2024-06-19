let input = document.getElementById('input');
let main = document.getElementById('main');
let hex = document.getElementById('hex');

function changeColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    let hexRed = red.toString(16);
    let hexGreen = green.toString(16);
    let hexBlue = blue.toString(16);

    let value = hex.value = `#${hexRed}${hexGreen}${hexBlue}.`
    input.value = `rgb(${red},${green},${blue})`
    main.style.backgroundColor = `rgb(${red},${green},${blue})`;

}

console.log(changeColor());
