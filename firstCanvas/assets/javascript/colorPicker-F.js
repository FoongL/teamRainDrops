let hue = 130;
let sat = 60;
let light = 55;
let opacity =1;

const colorChange = () => {
    const swatch = document.querySelector('.swatch');
    $('#color').css('background-color', `${getHSL()}`)
    document.getElementById('sat').style.backgroundColor = getHSL();
    document.getElementById('opa').style.backgroundColor = getHSL();
    lineColor = `${getHSL()}`
};

const getHSL = () => {
    return `hsla(${hue}, ${sat}%, ${light}%, ${opacity})`;
};

const main = () => {
    const hueInput = document.querySelector('input[name=hue]');
    hueInput.addEventListener('input', () => {
        hue = hueInput.value;
        colorChange();
    });

    const satInput = document.querySelector('input[name=sat]');
    satInput.addEventListener('input', () => {
        sat = satInput.value;
        colorChange();
    });

    const lightInput = document.querySelector('input[name=light]');
    lightInput.addEventListener('input', () => {
        light = lightInput.value;
        colorChange();
    });
    const opacityInput = document.querySelector('input[name=opacity]');
    opacityInput.addEventListener('input', () => {
        opacity = (opacityInput.value) / 100;
        colorChange();
    });

    colorChange();
};

document.addEventListener('DOMContentLoaded', main);
