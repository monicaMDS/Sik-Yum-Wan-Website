/* document.querySelector(".mooncake-view-event").addEventListener("click", () => {
  console.log("button clicked");
}); */

/* DESC OPEN CLOSE */

/* let descClose = document.querySelector(".desc-close-btn");
descClose.addEventListener("click", ()=>{
  document.querySelector();
}); */

//open search
function openSearch() {
  console.log("open search open");
}

//close desc general function
function closeDesc(tab) {
  console.log("closed desc");
  document.querySelector(tab).style.width = "0vw";
  document.querySelector(tab).style.padding = "0rem";
}

//open sikDesc
let sikDesc = document.querySelector(".sik-desc");
sikDesc.addEventListener("click", () => {
  let sikDescTab = document.querySelector(".sik-desc-tab");
  openDesc(sikDescTab);
});

//open yumDesc
let yumDesc = document.querySelector(".yum-desc");
yumDesc.addEventListener("click", () => {
  let yumDescTab = document.querySelector(".yum-desc-tab");
  openDesc(yumDescTab);
  waveAni();
});

//open wanDesc
let wanDesc = document.querySelector(".wan-desc");
wanDesc.addEventListener("click", () => {
  let wanDescTab = document.querySelector(".wan-desc-tab");
  openDesc(wanDescTab);
});

function openDesc(img) {
  img.style.width = "100vw";
  img.style.padding = "3rem";
}

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
