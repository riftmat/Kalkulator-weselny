function menuLeft() {
  const a = document.getElementById("menu-left");
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
};

let cie = document.getElementById("goscie");

function licz() {
  let pl = document.getElementsByClassName("pol");
  let pel = document.getElementsByClassName("pelne");
  
  pel.item(0).value = cie.value; // wódka
  pel.item(1).value = cie.value; // wino
  pel.item(2).value = cie.value * 1.5; // soki

  pl.item(0).value = cie.value * 0.5; // szampan
  pl.item(1).value = cie.value * 0.5; //  bimber
  pl.item(2).value = cie.value * 0.5; // woda

  let calo = document.getElementById("calosc");
  calo = (35 * pel.item(0).value) + (25 * pel.item(1).value) + (4.50 * pel.item(2).value) + (25 * pl.item(0).value) + (20 * pl.item(1).value) + (1.9 * pl.item(1).value);
  document.getElementById("calosc").innerHTML = (calo).toString();  

}; // liczenie picia

function liczjedzenie() {
  let gl = document.getElementById("daniagl"); // danie główne
  let przy = document.getElementById("przys"); // przystawki
  let prze = document.getElementById("przek"); // przekąski
  
  gl = gl.value * 60;
  przy = przy.value * 35;
  prze = prze.value * 25;

  let jed = document.getElementById("jedze");
  jed = (gl * cie.value) + (przy * cie.value) + (prze * (0.3 * cie.value));
  console.log(jed);
  document.getElementById("jedze").innerHTML = (jed).toString();  
} // liczenie jedzenia
