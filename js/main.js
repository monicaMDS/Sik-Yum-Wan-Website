//open search
let searchBtn = document.querySelector(".fa-magnifying-glass");

searchBtn.addEventListener("click", () => {
  document.querySelector(".search-bar").style.display = "block";
});

/* 

NAVIGATION OPEN AND CLOSE 

*/

let openNav = document.querySelector(".open-btn");
//console.log(openNav);

openNav.addEventListener("click", () => {
  console.log("side nav clicked");
  document.querySelector(".side-nav").style.width = "100vw";
});

let closeNav = document.querySelector(".close-btn");

closeNav.addEventListener("click", () => {
  console.log("side nav clicked");
  document.querySelector(".side-nav").style.width = "00vw";
});
