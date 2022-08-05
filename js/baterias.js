let bat_wrap = document.querySelector('#bat_wrap');

let bar = '<div class="bar"></div>';

var nivel = 3; /* NIVEL DA BATERIA RANGE 1 - 5 */
count = 0;

while (count < nivel) {
    bat_wrap.innerHTML += bar;
    count++;
}
