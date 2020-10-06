// ****** variables que es necessiten ******
let seleccionatJug = null;
let seleccionatOrd = null;
let jugat = false;
let text;
let guanyadorNom;
// jugadorActiu 0 = jugador, jugadorActiu 1 = ordinador
let jugadorActiu = 0;
// partits guanyats
let partits = {
    total: 0,
    ordenador: 0,
    jugador: 0
};

// ****** inici del joc ******
let jugSeleccionat = document.getElementById("jugSeleccionat");
// seleccio d'una opció
let rock = document.getElementById("j_0");
rock.addEventListener("click", () => {
    seleccionatJug = 0;
    joc();
});
let paper = document.getElementById("j_1");
paper.addEventListener("click", () => {
    seleccionatJug = 1;
    joc();
});
let scissors = document.getElementById("j_2");
scissors.addEventListener("click", () => {
    seleccionatJug = 2;
    joc();
});


// ****** el joc en sí ******
function joc() {
    canviarNodeText();
    jugadaOrdinador();
    jugat = true;
    imprimirGuanyador();
    // actualitzar estadística
    if ((seleccionatJug !== null) && (seleccionatOrd !== null)) {
        partits.total += 1;
        if (guanyadorNom === "Ordenador") partits.ordenador += 1;
        else if (guanyadorNom === "Jugador") partits.jugador += 1;
    }
    // canviar text estadística 
    actualitzarEstadistica();
}

// ****** canviar node text ****** 
function canviarNodeText() {
    let seleccio;
    // determinar el span de canviar
    if (jugadorActiu === 0) seleccio = seleccionatJug;
    else seleccio = seleccionatOrd;
    // determinar el text per canviar
    switch (seleccio) {
        case 0:
            text = "PIEDRA";
            break;
        case 1:
            text = "PAPEL";
            break;
        case 2:
            text = "TIJERA";
            break;
    }
    // canviar text selecció i jugador actiu
    if (jugadorActiu === 0) {
        document.getElementById("resultatJug").textContent = text;
        jugadorActiu = 1;
    } else {
        document.getElementById("resultatOrd").textContent = text;
        jugadorActiu = 0;
    }
}

// ****** jugada de l'ordinador, randomly ****** 
function jugadaOrdinador() {
    if (jugadorActiu === 1) {
        seleccionatOrd = Math.floor(Math.random() * 3);
        canviarNodeText();
    }
}

// ****** imprimir el resultat ******
function imprimirGuanyador() {
    // identificar al guanyador
    if (seleccionatJug === seleccionatOrd) guanyadorNom = "No hay ganador";
    else if (seleccionatJug === 0 && seleccionatOrd === 1) guanyadorNom = "Ordenador";
    else if (seleccionatJug === 0 && seleccionatOrd === 2) guanyadorNom = "Jugador";
    else if (seleccionatJug === 1 && seleccionatOrd === 0) guanyadorNom = "Jugador";
    else if (seleccionatJug === 1 && seleccionatOrd === 2) guanyadorNom = "Ordenador";
    else if (seleccionatJug === 2 && seleccionatOrd === 0) guanyadorNom = "Ordenador";
    else if (seleccionatJug === 2 && seleccionatOrd === 1) guanyadorNom = "Jugador";
    // canviar text
    document.getElementById("guanyador").textContent = guanyadorNom;
}

// ****** actualitzar estadística ******
function actualitzarEstadistica() {
    document.getElementById("partitsTotal").textContent = partits.total;
    document.getElementById("partitsOrd").textContent = partits.ordenador;
    document.getElementById("partitsJug").textContent = partits.jugador;
}