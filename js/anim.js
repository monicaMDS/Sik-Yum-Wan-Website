/******
 * LAZY SUSAN
 ******/

/* gsap.to(".lazy-susan-section ".backgroundImage, {
  rotation: 360,
}); */

/***
 * SPIN FUNCTION
 ***/
gsap.registerPlugin(MotionPathPlugin);

const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
circlePath.id = "circlePath";
document.querySelector("svg").prepend(circlePath);

//put items on path
let items = gsap.utils.toArray(".item"),
  numItems = items.length,
  itemStep = 1 / numItems,
  wrapProgress = gsap.utils.wrap(0, 1),
  snap = gsap.utils.snap(itemStep),
  wrapTracker = gsap.utils.wrap(0, numItems),
  tracker = { item: 0 };

gsap.set(items, {
  motionPath: {
    path: circlePath,
    align: circlePath,
    alignOrigin: [0.5, 0.5],
    end: (i) => i / items.length,
  },
  scale: 2,
});

const tl = gsap.timeline({ paused: true, reversed: true });

tl.to(".wrapper", {
  rotation: 360,
  transformOrigin: "center",
  duration: 1,
  ease: "none",
});

tl.to(
  items,
  {
    rotation: "-=360",
    transformOrigin: "center center",
    duration: 1,
    ease: "none",
  },
  0
);

tl.to(
  tracker,
  {
    item: numItems,
    duration: 1,
    ease: "none",
    modifiers: {
      item: (value) => wrapTracker(numItems - Math.round(value)),
    },
  },
  0
);

/* document.getElementById("prev").addEventListener("click", function () {
  var i = 0;

  var theArray = items;
  var currentIndex = 0;

  if (i === 0) {
    console.log(theArray[currentIndex]);
  } else if (i < 0) {
    console.log(
      theArray[(currentIndex + theArray.length + i) % theArray.length]
    );
  } else if (i > 0) {
    console.log(theArray[(currentIndex + i) % theArray.length]);
  }

  return moveWheel(-itemStep);
}); */

const nextArrow = document.querySelector("#next");

nextArrow.addEventListener("click", function () {
  return moveWheel(itemStep);
});

//next arrow hover
nextArrow.addEventListener("mouseover", () => {
  console.log("nextArrow mouseover");
  nextArrow.setAttribute("src", "../assets/icons/arrow-hover.png");

  //next arrow jiggle
  let arrowJig = gsap.to(nextArrow, {
    ease: "bounce.out",
    duration: 0.3,
    rotation: 15,
    yoyo: true,
  });

  arrowJigDelay.pause();
});

nextArrow.addEventListener("mouseout", () => {
  console.log("nextArrow mouseout");
  nextArrow.setAttribute("src", "../assets/icons/arrow-default.png");
  //next arrow jiggle
  let arrowJig = gsap.to(nextArrow, {
    ease: "bounce.out",
    duration: 0.3,
    rotation: -15,
    yoyo: true,
  });

  arrowJigDelay.restart();
});

//occasional arrow movement
let arrowJigDelay = gsap.to(nextArrow, {
  repeatDelay: 4,
  ease: "bounce.out",
  duration: 0.2,
  rotation: -15,
  repeat: -1,
  yoyo: true,
});

//wheel moving function
function moveWheel(amount, i, index) {
  let progress = tl.progress();
  tl.progress(wrapProgress(snap(tl.progress() + amount)));
  let next = tracker.item;
  tl.progress(progress);

  document.querySelector(".item.active").classList.remove("active");
  items[next].classList.add("active");

  gsap.to(tl, {
    progress: snap(tl.progress() + amount),
    modifiers: {
      progress: wrapProgress,
    },
  });
}

//Resources;

/******************
 * ITEM HOVERS
 ******************/

/******************
 * LANDING PAGE HOVERS
 * ******************/

//SIK DESCRIPTION BIG IMAGE
let bigDescImg = document.querySelector(".big-desc-img");

//pulse animation
gsap.to(bigDescImg, {
  scale: 1.05,
  duration: 2,
  stagger: {
    each: 1,
    repeat: -1,
    yoyo: true,
  },
});

//hover animation
bigDescImg.addEventListener("mouseover", () => {
  gsap.to(bigDescImg, {
    rotation: -10,
    yoyo: true,
  });
});

bigDescImg.addEventListener("mouseout", () => {
  gsap.to(bigDescImg, {
    rotation: 10,
    yoyo: true,
  });
});

//YUM DESCRIPTION BIG IMAGE

let yumDescImg = document.querySelector(".yum-desc-img");

//WAVE ANIMATION

function waveAni() {
  gsap.to(yumDescImg, {
    motionPath: {
      path: "#wave-path",
      align: "#wave-path",
      alignOrigin: [0.5, 0.5],
      autoRotate: false,
    },
    duration: 5,
    yoyo: true,

    stagger: {
      each: 1,
      repeat: -1,
      yoyo: true,
    },
  });
}

//WAN DESCRIPTION BIG IMAGE

let wanDescImg = document.querySelector(".wan-desc-img");

//jiggle animation
gsap.to(wanDescImg, {
  repeatDelay: 2,
  ease: "bounce.out",
  duration: 0.2,
  rotation: -10,
  repeat: -1,
  yoyo: true,
});

//hover animation
wanDescImg.addEventListener("mouseover", () => {
  gsap.to(wanDescImg, {
    duration: 2,
    ease: "back.out(1.7)",
    scaleX: 1.5,
    stagger: {
      scaleY: 1.7,
    },
  });
});

wanDescImg.addEventListener("mouseout", () => {
  gsap.to(wanDescImg, {
    duration: 2,
    ease: "back.out(1.7)",
    scaleX: -1.5,
    scaleY: -1.7,
  });
});
/******************
 * EVENT PAGE HOVERS
 * ******************/

/* const eventNav = documnet.querySelector(".event-nav-img");

eventNav.addEventListener() */

/* const heartO = document.querySelectorAll(".heart-o");
console.log(heartO);

heartO.addEventListener("click", (hearts) => {
  console.log("heart clicked");
  hearts.forEach((heart) => {
    heart.setAttribute("src", "../assets/icons/heart-orange-hover.png");
  }); */
/*   gsap.fromTo(
    heartO,
    {
      scale: 0.5,
    },
    {
      duration: 0.5,
      scale: 1,
      ease: "bounce.out",
    }
  ); */
/* }); */
