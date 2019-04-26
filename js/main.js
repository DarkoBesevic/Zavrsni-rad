// Navigacioni meni
$(document).ready(function () {
  $("button").click(function () {
    $("nav").toggle("slow");
  });
});
/*
// Modal box - u posebnom fajlu!

var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

// klikom na dugme, otvaramo modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// klikom na span X zatvaramo modal
span.onclick = function() {
  modal.style.display = "none";
}

// klikom bilo gde van, zatvaramo modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/
// Kontakt forma
function myFunction() {
  document.getElementById("myForm").submit();
}