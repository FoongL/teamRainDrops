class ColorPick  {
    constructor() {
        this.hue = 130;
        this.sat = 60;
        this.light = 55;
        this.opacity =1;
      }

colorChange = () => {
    const swatch = document.querySelector('.swatch');
    $('#color').css('background-color', `${this.getHSL()}`)
    document.getElementById('sat').style.backgroundColor = this.getHSL();
};

getHSL = () => {
    return `hsla(${hue}, ${sat}%, ${light}%, ${opacity})`;
};

main = () => {
    const hueInput = document.querySelector('input[name=hue]');
    hueInput.addEventListener('input', () => {
        hue = hueInput.value;
        this.colorChange();
    });

    const satInput = document.querySelector('input[name=sat]');
    satInput.addEventListener('input', () => {
        sat = satInput.value;
        this.colorChange();
    });

    const lightInput = document.querySelector('input[name=light]');
    lightInput.addEventListener('input', () => {
        light = lightInput.value;
        this.colorChange();
    });
    const opacityInput = document.querySelector('input[name=opacity]');
    opacityInput.addEventListener('input', () => {
        opacity = (opacityInput.value) / 100;
        this.colorChange();
    });

    this.colorChange();
};

document.addEventListener('DOMContentLoaded', main);
