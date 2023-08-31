/******
 * LAZY SUSAN
 ******/

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

//mooncake hover
const susanMooncake = document.querySelector(".susan-mooncake");
susanMooncake.addEventListener("mouseover", () => {
  console.log("mooncake event mouseover");
  /* susanMooncake.setAttribute("src", "../assets/images/mooncake-hover.png"); */

  gsap.to({
    duration: 0.3,
    ease: "bounce.out",
    rotate: 150,
  });
});

susanMooncake.addEventListener("mouseout", () => {
  console.log("mooncake event mouseout");
  /* susanMooncake.setAttribute("src", "../assets/images/mooncake-default.png"); */

  gsap.to({
    duration: 0.3,
    ease: "bounce.out",
    rotate: -15,
  });
});

susanMooncake.addEventListener("click", () => {});


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
