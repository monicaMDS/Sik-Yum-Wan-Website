/* document.querySelector(".mooncake-view-event").addEventListener("click", () => {
  console.log("button clicked");
}); */

/* DESC OPEN CLOSE */

/* let descClose = document.querySelector(".desc-close-btn");
descClose.addEventListener("click", ()=>{
  document.querySelector();
}); */

//close desc general function
function closeDesc(name) {
  console.log("Hello wowrld");
  document.querySelector(name).style.width = "0vw";
}

//open sikDesc
let sikDesc = document.querySelector(".sik-desc");
sikDesc.addEventListener("click", () => {
  document.querySelector(".sik-desc-tab").style.width = "100vw";
});

//open yumDesc
let yumDesc = document.querySelector(".yum-desc");
yumDesc.addEventListener("click", () => {
  document.querySelector(".yum-desc-tab").style.width = "100vw";
});

//open wanDesc
let wanDesc = document.querySelector(".wan-desc");
wanDesc.addEventListener("click", () => {
  document.querySelector(".wan-desc-tab").style.width = "100vw";
});

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

/** SWITCH PAGE FUNCTIONS  */

document.querySelector(".item-1").addEventListener("click", () => {
  window.location.href = "./html-pages/mooncake.html";
});
