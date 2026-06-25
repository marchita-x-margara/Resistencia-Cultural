var chicasTitulo;

let letra = `Desarrollo completo
Iara Martinez

Arte, escritura y programación
Iara Martinez

Música original
Quado
Juan
Tati1`;

let letra2 =`Volver a intentar?`;

let textoVisible = "";
let indice = 0;

let textoVisible2 = "";
let indice2 = 0;

var Fondo = {};
var rectangulo;
var back;

var nombre;

var avanzar = true;

var Laura = [];
var lauraX = -500;
var lauraFX = -50;

var Nan = [];
var nanX = -400;
var nanFX = 620;

var Moli = [];
var molix = 1400;
var moliFX = 430;

var ancho = 400;
var alto = 900;
var FY = 100;

var fuente = [];

var i = 0;
var iLaura = 0;
var iNan = 0;
var iMoli = 0;

var velNormal = 0.1;
var velHablando = 0.3;

var flecha;

var escena = 0;

var fadeAlpha = 0;
var haciendoFade = false;
var fadeListo = false;
var haciendoFadeIn = false;
var fadeAlpha2 = 255; 

var linea = 0;
var esperandoDecision = false;
var dialogoActivo = [];

var decision;
var decision1 = 0;
var decision2 = 0;
var decision3 = 0;

let volumenMusica = 0.5;

var cancion1, cancion2, cancion3, cancion4, cancionTitulo;
var cancionActual = null;

var sfx = {};

var papel;
var botones = [];
var zonas = [
  { x: 220, y: 200, w: 250, h: 150 },
  { x: 150, y: 370, w: 300, h: 130 },
  { x: 230, y: 500, w: 300, h: 150 },
];

var tap;
let tapSonó = false;


var enOpciones = false;
let arrastrando = 0;

var sliderMio
var estrellita
var estrellita2
let volumenSonidos = 1; 

var confi

function setup() {
  createCanvas(1000, 700);
  iniciarEscena(0);
}

function preload() {

  chicasTitulo= loadImage("chicasTitulo.png")
  nombre=loadImage("nombres.png")
  back = loadImage ("back.png")
 sliderMio = loadImage("slider/slider.png");
estrellita = loadImage("slider/estrellita.png");
 estrellita2 = loadImage("slider/estrellita2.png");

 botones = [  
  loadImage("boton/boton1.png"),
  loadImage("boton/boton2.png"),
  loadImage("boton/boton3.png"),
];

  papel = loadImage("titulo1.jpg");

  Laura = [
 loadImage("chicas/Laura1.png"),
  loadImage("chicas/Laura2.png"),
   loadImage("chicas/Laura3.png"),
    loadImage("chicas/Laura4.png"),
   loadImage("chicas/Laura5.png"),
  ];

 Nan = [
   loadImage("chicas/Nan1.png"),
   loadImage("chicas/Nan2.png"),
  loadImage("chicas/Nan3.png"),
  loadImage("chicas/Nan4.png"),
    loadImage("chicas/Nan5.png"),
  ];

 Moli = [
   loadImage("chicas/Moli1.png"),
   loadImage("chicas/Moli2.png"),
   loadImage("chicas/Moli3.png"),
  loadImage("chicas/Moli4.png"),
  loadImage("chicas/Moli5.png"),
 ];

  Fondo["calle"] = loadImage("fondos/calle.jpg");
 Fondo["patio"] = loadImage("fondos/patio.jpg");
 Fondo["interior1"] = loadImage("fondos/Interior1.jpg");
  Fondo["interior2"] = loadImage("fondos/Interior2.jpg");
 Fondo["interior3"] = loadImage("fondos/Interior3.jpg");
Fondo["calle2"] = loadImage("fondos/calle2.jpg");
  Fondo["patio2"] = loadImage("fondos/patio2.jpg");

rectangulo = loadImage("rectangulo.png");
  
 confi = loadImage("confi.png");

  decision = loadImage("decision.png");

  flecha = loadImage("flecha.png");

cancionTitulo = loadSound("canciones/clima.mp3");
 cancion1 = loadSound("canciones/acto1.mp3");
 cancion2 = loadSound("canciones/acto2.mp3");
  cancion3 = loadSound("canciones/acto3.mp3");
 cancion4 = loadSound("canciones/final.mp3");

sfx["piedritas"] = loadSound("sonido/piedritas.mp3");
  sfx["perro"] = loadSound("sonido/perro.mp3");
 sfx["lata"] = loadSound("sonido/lata.mp3");
 sfx["fecha"] = loadSound("sonido/fecha.mp3");
sfx["risas"] = loadSound("sonido/risas.mp3");
sfx["canto"] = loadSound("sonido/canto.mp3");
 sfx["golpe"] = loadSound("sonido/golpe.mp3");
 sfx["dalejano"] = loadSound("sonido/dalejano.mp3");
 sfx["fecha2"] = loadSound("sonido/fecha2.mp3");
 sfx["fecha3"] = loadSound("sonido/fecha3.mp3");
 sfx["fecha4"] = loadSound("sonido/fecha4.mp3");
 sfx["tacones"] = loadSound("sonido/tacones.mp3");

tap = loadSound("sonido/tap.mp3");

  fuente = [
    loadFont("letritas/SVBasicManual.ttf"),
    loadFont("letritas/SmallTypeWriting.ttf"),
    loadFont("letritas/Holidays Homework.ttf"),
    loadFont("letritas/HorrorFont-Regular.ttf"),
    loadFont("letritas/EricaType-Bold1.ttf"),
    loadFont("letritas/thisone.ttf"),
   
  ];
}

function draw() {
 background(0);
  
  var actual = dialogoActivo[linea];

iLaura += (actual?.hablante === "Laura") ? velHablando : velNormal;
iNan += (actual?.hablante === "Nan") ? velHablando : velNormal;
iMoli += (actual?.hablante === "Moli") ? velHablando : velNormal;

if (iLaura >= Laura.length) iLaura = 0;
if (iNan >= Nan.length) iNan = 0;
if (iMoli >= Moli.length) iMoli = 0;
  
  switch (escena) {
    case 0:
      titulo();
      break;
    
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
    Blabla();
    break;

  case 8:
    creditos();
    break;
  }
  if (escena !== 0) {
    configuracion();
  }
}

function mousePressed() {
  print(mouseX, mouseY);
  
  if (escena !== 0) {
    if (mouseX > 910 && mouseX < 980 && mouseY > 15 && mouseY < 85) {
      enOpciones = !enOpciones;
      return;
    }
  }

  if (escena === 8) {

    if (indice >= letra.length && indice2 >= letra2.length) {
      iniciarEscena(0);

      textoVisible = "";
      indice = 0;

      textoVisible2 = "";
      indice2 = 0;
    }

    return;
  }

 switch (escena) {
  case 0:
    clickTitulo();
    break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      click();
      break;
  }
}

function titulo() {
  if (!papel || !back || botones.length === 0) return;
  image(papel, 0, 0, 1000, 700);
  image(back, 460, 130, 470, 530,200);
  let algunHover = false;
  zonas.forEach((z, idx) => {
    if (!botones[idx]) return;
    let hover =
      mouseX > z.x && mouseX < z.x + z.w && mouseY > z.y && mouseY < z.y + z.h;
    drawingContext.shadowOffsetX = 4;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.2)';
    image(botones[idx], z.x, z.y, z.w, z.h);
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 'rgba(0,0,0,0)';
    if (hover) {
      algunHover = true;
      tint(220, 220, 255);
      image(botones[idx], z.x, z.y, z.w, z.h);
      noTint();
      if (!tapSonó) {
        tap.play();
        tapSonó = true;
      }
      }
  });
  if (!algunHover) tapSonó = false;

  

  textFont(fuente[3]);
  fill(0);
  textSize(80);
  text("Resistencia Cultural", 200,110);
 
  fill(0);
  textSize(35);
  text("Comenzar", 280, 300);
  textSize(45);
  text("opciones", 230, 450);
  textSize(50);
  text(" info", 340, 570);
  
textFont(fuente[1]);
   textSize(20);
  text("margara.x.marchita", 10, 690);

  image(chicasTitulo, 550, 150, 400, 550);
   
  if (enOpciones) {
    subirYbajar();
    }

}

function Blabla() {
  var actual = dialogoActivo[linea];
  if (!actual) return;
  
  if (!Fondo[actual.fondo]) {
    print("fondo no encontrado:", actual.fondo, "en linea:", linea);
    return;
  }
  
  image(Fondo[actual.fondo], 0, 0, 1000, 700);

  lauraX = lerp(lauraX, actual.Laura ? lauraFX : -500, 0.05);
  nanX = lerp(nanX, actual.Nan ? nanFX : 1400, 0.05);
  molix = lerp(molix, actual.Moli ? moliFX : 1400, 0.05);

  if (actual.Laura) {
  //  if (actual.hablante === "Laura") {
     // image(Laura[floor(i)], lauraX, FY, ancho, alto);
   if (Laura[floor(iLaura)]) {
  image(Laura[floor(iLaura)], lauraX, FY, ancho, alto);
}
    //} else {
     // image(Laura[0], lauraX, FY, ancho, alto);
    //}
  }
  if (actual.Nan) {
  //   if (actual.hablante === "Nan") {
    //  image(Nan[floor(i)], nanX, FY, ancho, alto);
   image(Nan[floor(iNan)], nanX, FY, ancho, alto);
    //  } else {
  //     image(Nan[0], nanX, FY, ancho, alto);
   //  }
  }
  if (actual.Moli) {
    // if (actual.hablante === "Moli") {
     // image(Moli[floor(i)], molix, FY, ancho, alto);
    image(Moli[floor(iMoli)], molix, FY, ancho, alto);
    // } else {
   //    image(Moli[0], molix, FY, ancho, alto);
    // }
  }

  if (esperandoDecision) {
    elegirOpcion(actual.opciones);
  } else if (actual.texto && actual.texto !== "") {
    cajaDialogo(actual.hablante, actual.texto);
  }

  if (haciendoFade) {
    fadeAlpha = min(fadeAlpha + 4, 255);
    fill(0, fadeAlpha);
    rect(0, 0, width, height);
    if (fadeAlpha >= 255 && !fadeListo) {
      fadeListo = true;
      haciendoFade = false;
      fadeAlpha = 255;
      haciendoFadeIn = true;
      linea++;
      if (linea >= dialogoActivo.length) {
        siguienteEscena();
      } else {
        if (dialogoActivo[linea].decision) esperandoDecision = true;
      }
      avanzar = true;
    }
  }
  if (haciendoFadeIn) {
    fadeAlpha = max(fadeAlpha - 4, 0);
    fill(0, fadeAlpha);
    noStroke();
    rect(0, 0, width, height);
    if (fadeAlpha <= 0) {
      haciendoFadeIn = false;
    }
  }
}

function cajaDialogo(nombreHablante, texto) {
  image(rectangulo, 150, 520, 700, 220);

  if (avanzar) {
    image(flecha, 750, 630, 92, 99);
  }

  if (nombreHablante !== "narrador") {
    drawingContext.shadowOffsetX = 3;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'rgba(255, 255, 255, 0.5)';
    image(nombre, 150, 575, 190, 60);
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 'rgba(0,0,0,0)';
  }

  textFont(fuente[0]);
  fill(255);
  textSize(35);
  text(nombreHablante === "narrador" ? "" : nombreHablante, 180, 615);

  if (nombreHablante === "narrador") {
    textFont(fuente[1]);
  } else {
    textFont(fuente[4]);
  }

  fill(0);
  textSize(16);
  text(texto, 345, 575, 420, 140);
}

function elegirOpcion(opciones) {
  var botonAncho = 520;
  var botonAlto = 130;
  var separacion = 12;
  var totalH = opciones.length * (botonAlto + separacion) - separacion;
  var botonY = height / 2 - totalH / 2;
  var botonX = width / 2 - botonAncho / 2;

  for (var k = 0; k < opciones.length; k++) {
    var bX = botonX;
    var bY = botonY + k * (botonAlto + separacion);

    image(decision, bX, bY, botonAncho, botonAlto);

    fill(0);
    textFont(fuente[0]);
    textSize(28);
   text(opciones[k].texto, bX + botonAncho / 2 - 145, bY + botonAlto / 2);

  }
}

function iniciarEscena(nuevaEscena) {
  escena = nuevaEscena;

  linea = 0;
  esperandoDecision = false;
  enOpciones = false;

  if (nuevaEscena === 8) {
    fadeAlpha2 = 255;
    haciendoFadeIn = true;
  }

  lauraX = -500;
  nanX = -400;
  molix = 1400;

  if (nuevaEscena !== 0) {
    switch (nuevaEscena) {
      case 1:
      case 2:
        cambiarMusica(cancion1);
        break;
      case 3:
      case 4:
        cambiarMusica(cancion2);
        break;
      case 5:
      case 6:
        cambiarMusica(cancion3);
        break;
      case 7:
        cambiarMusica(cancion4);
        break;
    }
  }

  switch (escena) {
    case 1:
      dialogoActivo = acto1;
      break;
    case 2:
      dialogoActivo = decision1 >= 1 ? Acto1A : Acto1B;
      break;
    case 3:
      dialogoActivo = acto2;
      break;
    case 4:
      dialogoActivo = decision2 >= 1 ? acto2A : acto2B;
      break;
    case 5:
      dialogoActivo = acto3;
      break;
    case 6:
      dialogoActivo = decision3 >= 1 ? acto3A : acto3B;
      break;
    case 7:
      dialogoActivo = decision1 + decision2 + decision3 >= 2 ? final1 : final2;
      break;
  }
}

function siguienteEscena() {
  switch (escena) {
    case 1:
      iniciarEscena(2);
      break;
    case 2:
      iniciarEscena(3);
      break;
    case 3:
      iniciarEscena(4);
      break;
    case 4:
      iniciarEscena(5);
      break;
    case 5:
      iniciarEscena(6);
      break;
    case 6:
      iniciarEscena(7);
      break;
      case 7:
      iniciarEscena(8);
      break;
  }
}

function click() {
   if (enOpciones) return;
  if (esperandoDecision) {
    var actual = dialogoActivo[linea];
    var opciones = actual.opciones;
    var botonAncho = 520;
    var botonAlto = 130;
    var separacion = 12;
    var totalH = opciones.length * (botonAlto + separacion) - separacion;
    var botonY = height / 2 - totalH / 2;
    var botonX = width / 2 - botonAncho / 2;

    for (var k = 0; k < opciones.length; k++) {
      var bX = botonX;
      var bY = botonY + k * (botonAlto + separacion);
      avanzar = false;

      if (
        mouseX > bX &&
        mouseX < bX + botonAncho &&
        mouseY > bY &&
        mouseY < bY + botonAlto
      ) {
        aplicarValor(opciones[k].valor);
        esperandoDecision = false;
        avanzarLinea();
        avanzar = true;
        return;
      }
    }
  } else {
    avanzarLinea();
  }
}

function avanzarLinea() {
  var actual = dialogoActivo[linea];
  if (actual && actual.fadeOut && !haciendoFade) {
    haciendoFade = true;
    fadeListo = false;
    avanzar = false;
    return;
  }
  avanzar = true;
  linea++;
  if (linea >= dialogoActivo.length) {
    siguienteEscena();
    return;
  }
  var siguiente = dialogoActivo[linea];
  if (siguiente.sonido && sfx[siguiente.sonido]) {
 sfx[siguiente.sonido].setVolume(volumenSonidos);
    sfx[siguiente.sonido].play();
  }
  if (dialogoActivo[linea].decision) esperandoDecision = true;

}

function aplicarValor(v) {
  if (v.decision1 !== undefined) decision1 = v.decision1;
  if (v.decision2 !== undefined) decision2 = v.decision2;
  if (v.decision3 !== undefined) decision3 = v.decision3;
}

function cambiarMusica(nueva) {
  if (cancionActual === nueva) return;

  if (cancionActual && cancionActual.isPlaying()) {
    let vieja = cancionActual;

    vieja.setVolume(0, 1.5);

    setTimeout(() => {
      vieja.stop();
    }, 1500);
  }

  cancionActual = nueva;

  cancionActual.setVolume(0);
  cancionActual.loop();

 cancionActual.setVolume(volumenMusica, 1.5);
}

function configuracion() {
  
  let bX = 910, bY = 15, bW = 70, bH = 90;
  
  
  if (enOpciones) {
    fill(80, 80, 80, 200);
  } else {
    fill(30, 30, 30, 160);
  }
  
 image(confi, bX, bY, bW, bH)
 
  if (enOpciones) {
    subirYbajar();
  }
}

function mouseMoved() {
  if (escena === 0 && cancionTitulo && cancionActual !== cancionTitulo) {
    cambiarMusica(cancionTitulo);
  }
}

function subirYbajar() {
  image(sliderMio, 400, 200, 500, 500);

  let estrella1X = map(volumenMusica, 0, 1, 551, 819);
  let estrella2X = map(volumenSonidos, 0, 1, 551, 819);
  
 image(estrellita, estrella1X - 50, 390, 100, 100);
image(estrellita2, estrella2X - 50, 550, 100, 100);

  if (mouseIsPressed && dist(mouseX, mouseY, estrella1X, 427) < 20) {
    arrastrando = 1;
  }
  if (mouseIsPressed && dist(mouseX, mouseY, estrella2X, 590) < 20) {
    arrastrando = 2;
  }
  if (!mouseIsPressed) arrastrando = 0;

  if (arrastrando === 1) {
    estrella1X = constrain(mouseX, 551, 819);
    volumenMusica = map(estrella1X, 551, 819, 0, 1);
    if (cancionActual) cancionActual.setVolume(volumenMusica);
  }
  if (arrastrando === 2) {
    estrella2X = constrain(mouseX, 551, 819);
    volumenSonidos = map(estrella2X, 551, 819, 0, 1);
  }
}

 function creditos(){
  image(papel, 0, 0, 1000, 700);
   image(decision, 460,520,300,150)
   textFont(fuente[1]);
  fill(0);
  textSize(20);
  noStroke();
  
  if (indice < letra.length) {
    yopiycompania();
  } else {
    text(textoVisible,30,50,540);
    volver();
  }
   if (haciendoFadeIn) {
    fadeAlpha2 = max(fadeAlpha2 - 2, 0);
    fill(0, fadeAlpha2);
    noStroke();
    rect(0, 0, width, height);
    if (fadeAlpha2 <= 0) {
      haciendoFadeIn = false;
    }
  }
}
function yopiycompania(){
 
  if(frameCount % 3 == 0 && indice < letra.length){
    textoVisible += letra[indice];
    indice++;
  }

  let bubu = "";

  if(frameCount % 60 < 30){
    bubu = "|";
  }

  text(textoVisible + bubu,30,50,540);
     }
function volver(){
 
  if(frameCount % 5 == 0 && indice2 < letra2.length){
    textoVisible2 += letra2[indice2];
    indice2++;
  }

  let bubu2 = "";

  if(frameCount % 60 < 30){
    bubu2 = "|";
  }

  text(textoVisible2 + bubu2,500,600);
   }

function clickTitulo() {
  zonas.forEach((z, idx) => {
    let hover = mouseX > z.x && mouseX < z.x + z.w && mouseY > z.y && mouseY < z.y + z.h;
    if (hover) {
      if (idx === 0) iniciarEscena(1);
      if (idx === 1) enOpciones = !enOpciones;
    }
  });
}