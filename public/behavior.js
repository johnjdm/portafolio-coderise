//Efecto imagen perfil
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

//Evento Holberton, Function to change the content of t2
function modifyText() {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = " School";    
}
							 
//Function to add event listener to t de texto
function load() { 
  var el = document.getElementById("t1"); 
  el.addEventListener("click", modifyText, false); 
} 
document.addEventListener("DOMContentLoaded", load, false);

//Saludo con el Logo  
var thumbnailElement = document.getElementById("smart_thumbnail");

thumbnailElement.addEventListener("click", function() {
  myFunction();
});

function myFunction() {
  var time = new Date().getHours();
  if (time < 12) {
    alert("Good morning. I saw you click on the logo of the Holberton School!");
  } else if (time < 20) {
    alert("Good afternoon. I saw you click on the logo of the Holberton School!");
  } else {
    alert("Good evening. I saw you click on the logo of the Holberton School!");
  }
}

//Efecto Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
