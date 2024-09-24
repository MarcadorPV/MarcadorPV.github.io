var CRojo = 0;
var CAzul = 0;
var CSaque =  0;
var historial = [];

var PRojo = document.getElementById("PRojo");
var PAzul = document.getElementById("PAzul");
var Atras = document.getElementById("Anterior");
var Saque = document.getElementById("Saque");

window.addEventListener("load", function() {
  guardarHistorial();
});

PRojo.addEventListener( "click", function(){
  CRojo++;
  CSaque = 0;
  PRojo.innerHTML = CRojo;
  Saque.disabled = true;
  guardarHistorial();
  CoSaque();
});

Atras.addEventListener("click", function(){
  anteriorHistorial();
});

PAzul.addEventListener( "click", function(){
  CAzul++;
  CSaque = 1;
  PAzul.innerHTML = CAzul;
  Saque.disabled = true;
  guardarHistorial();
  CoSaque();
});

Saque.addEventListener("click", function(){
  if (CSaque == 0) {
    CSaque = 1;
  }
  else if(CSaque == 1){
    CSaque = 0;
  }
  CoSaque();
  guardarHistorial();
});

function CoSaque(){
  if (CSaque == 0) {
    Saque.style.backgroundColor = "#ffae00";
  }
  else if(CSaque == 1){
    Saque.style.backgroundColor = "#00fbff";
  };
};

function guardarHistorial(){
  historial.push({
    CRojo: CRojo,
    CAzul: CAzul,
    CSaque: CSaque,
  });
};

function anteriorHistorial(){
  if (historial.length > 1) {
    historial.pop();
    actualizarHistorial();
  }
  else{
   guardarHistorial(); 
  };
};

function actualizarHistorial() {
  var AN = historial.length - 1;
  CRojo = historial[AN].CRojo;
  CAzul = historial[AN].CAzul;
  CSaque = historial[AN].CSaque;
  PRojo.innerHTML = CRojo;
  PAzul.innerHTML = CAzul;
  CoSaque();
  if (CSaque == 0) {
    Saque.innerHTML = SaqueRojo;
  }
  else{
    Saque.innerHTML = SaqueAzul;
  };
};