let iconos = []
let selecciones = []

generarTablero()

function cargarIconos() {
    iconos = [
        '<img src="img/pipe.jpg" width="100%">',
        '<img src="img/cesitar.png" width="100%">',
        '<img src="img/milo.png" width="100%">',
        '<img src="img/erwin.png" width="100%">',
        '<img src="img/chascon.png" width="100%">',
        '<img src="img/tussi.png" width="100%">',
        '<img src="img/jairo.png" width="100%">',
        '<img src="img/raul.png" width="100%">',
        '<img src="img/leoquenoesleo.png" width="100%">',
        '<img src="img/tali.jpg" width="100%">',
        '<img src="img/oso1.jpg" width="100%">',
        '<img src="img/alan1.jpg" width="100%">',
    ]
}

function generarTablero() {
    cargarIconos()
    let len = iconos.length
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    
    for (let i = 0; i < len*2; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
    }, 1000);
}
