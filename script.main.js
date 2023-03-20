const options = document.getElementById("options");
const right = document.getElementById("right");

function menuLeft() {
  const a = document.getElementById("menu-left");
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
};

options.addEventListener("click", () => {
  if (right.style.display === "flex") {
    right.style.display = "none";
    options.style.rotate = "180deg"
  } else {
    right.style.display = "flex";
    options.style.rotate = "0deg"
  }
});

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

  let w = document.getElementById("w");
  let ww = document.getElementById("ww");
  let sz = document.getElementById("sz");
  let b = document.getElementById("b");
  let s = document.getElementById("s");
  let water = document.getElementById("water");

  let calo = document.getElementById("calosc");
  calo = (w.value * pel.item(0).value) + (ww.value * pel.item(1).value) + (s.value * pel.item(2).value) + (sz.value * pl.item(0).value) + (b.value * pl.item(1).value) + (water.value * pl.item(1).value);
  document.getElementById("calosc").innerHTML = (calo).toString();  

}; // liczenie picia

function liczjedzenie() {
  let gl = document.getElementById("daniagl"); // danie główne
  let przy = document.getElementById("przys"); // przystawki
  let prze = document.getElementById("przek"); // przekąski
  let danO = document.getElementById("danO");
  let danT = document.getElementById("danT");
  let danTT = document.getElementById("danTT");
  
  gl = gl.value * danO.value;
  przy = przy.value * danT.value;
  prze = prze.value * danTT.value;

  let jed = document.getElementById("jedze");
  jed = (gl * cie.value) + (przy * cie.value) + (prze * (0.3 * cie.value));
  console.log(jed);
  document.getElementById("jedze").innerHTML = (jed).toString();  
} // liczenie jedzenia

