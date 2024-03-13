// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}




const icon = document.querySelector("#menu-icon");
const side = document.querySelector(".side-nav");
const exit = document.querySelector(".exit");

icon.addEventListener("click", () => {
    icon.classList.toggle("active");
    side.classList.toggle("active");
})

document.querySelectorAll(".side-nav").forEach(n => n.addEventListener("click", () => {
    icon.classList.remove("active");
    side.classList.remove("active");
}))

var rightnow = new Date();
var year = rightnow.getFullYear();
year_clock = document.getElementById("year_clock");
year;
year_clock.innerHTML = "&copy; " + year + " Joseph Web Designs <br> All rights reserved";


