let kliknietaWatoscX;
let kliknieteDzialanie;
let kliknietaWatoscY;


function kliknietoWLiczbe(liczba) {
    const screen = document.getElementById("screen");
    screen.innerHTML = liczba;
    if (!kliknieteDzialanie) {
        kliknietaWatoscX = liczba;
    } else {
        kliknietaWatoscY = liczba;
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
            screen.innerHTML = kliknietaWatoscX + "+" + kliknietaWatoscY + "=" + (kliknietaWatoscX + kliknietaWatoscY);
            break;
        case "-":
            screen.innerHTML = kliknietaWatoscX + "-" + kliknietaWatoscY + "=" + (kliknietaWatoscX - kliknietaWatoscY);
            break;
        case "*":
            screen.innerHTML = kliknietaWatoscX + "*" + kliknietaWatoscY + "=" + (kliknietaWatoscX * kliknietaWatoscY);
            break;
        case "/":
            screen.innerHTML = kliknietaWatoscX + "/" + kliknietaWatoscY + "=" + (kliknietaWatoscX / kliknietaWatoscY);
            break;
    }
    
}

