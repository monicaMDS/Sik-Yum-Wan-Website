/* document.querySelector(".mooncake-view-event").addEventListener("click", () => {
  console.log("button clicked");
}); */

// NAVIGATION OPEN AND CLOSE
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

/* function openNav() {
  console.log("side nav clickeed");
  document.querySelector(".side-nav").style.width = "100vw";
} */

/* SCROLL FUNCTIONS */

let toBtm = document.querySelector(".to-footer");

toBtm.addEventListener("click", () => {
  document.body.scrollTo = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

let toTop = document.querySelector(".to-top");
toTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
