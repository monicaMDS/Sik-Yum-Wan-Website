//LAZY SUSAN
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

document.getElementById("prev").addEventListener("click", function () {
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
});

document.getElementById("next").addEventListener("click", function () {
  return moveWheel(itemStep);
});

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

Resources;

//footer functionality
const toTopBtn = document.querySelector(".to-top");

toTopBtn.addEventListener("mouseover", () => {
  console.log("footer hovered");
  toTopBtn.setAttribute("src", "../assets/icons/to-top-hover.png");
});

toTopBtn.addEventListener("mouseout", () => {
  console.log("footer-button unhovered");
  toTopBtn.setAttribute("src", "../assets/icons/to-top-default.png");
});
