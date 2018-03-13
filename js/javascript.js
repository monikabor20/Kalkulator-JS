let kliknietaWatoscX;
let kliknieteDzialanie;
let kliknietaWatoscY;


function kliknietoWLiczbe(liczba) {
    const screen = document.getElementById("screen");
    if (!kliknietaWatoscY && kliknieteDzialanie) {
        screen.innerHTML = liczba;
    } else {
        screen.innerHTML += liczba;
    }
    if (!kliknieteDzialanie) {
        kliknietaWatoscX = +screen.innerHTML;
    } else {
        kliknietaWatoscY = +screen.innerHTML;
    }
}

function kliknietoWDzialanie(dzialanie) {
    const screen = document.getElementById("screen");
    screen.innerHTML = dzialanie;
    kliknieteDzialanie = dzialanie;
}

function kliknietoWRownaSie() {
    const screen = document.getElementById("screen");

    switch (kliknieteDzialanie) {
        case "+":
            screen.innerHTML = (kliknietaWatoscX + kliknietaWatoscY);
            break;
        case "-":
            screen.innerHTML = (kliknietaWatoscX - kliknietaWatoscY);
            break;
        case "*":
            screen.innerHTML = (kliknietaWatoscX * kliknietaWatoscY);
            break;
        case "/":
            screen.innerHTML = (kliknietaWatoscX / kliknietaWatoscY);
            break;
    }
}

function kliknietoWClear() {
    const screen = document.getElementById("screen");
    kliknietaWatoscX = null;
    kliknietaWatoscY = null;
    kliknieteDzialanie = null;
    screen.innerHTML = null;

}
