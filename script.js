let denyEntryBtn = document.getElementById("denyEntry");
let grantEntryBtn = document.getElementById("grantEntry");
let modal = document.getElementById("modal");
let consent = document.getElementById("consent");
let overlay = document.getElementById("overlay");
let inputs = document.getElementsByClassName("faux-ui-facia");
let slide = 0;

let goForward = () => {
  modal.classList.add("hide");
  overlay.classList.add("hide");
  setTimeout(function () {
    consent.classList.add("hide");
    modal.remove();
    overlay.remove();
  }, 700);
};

let goBack = () => {
  console.log("ran");
  window.history.go(-1);
};

grantEntryBtn.addEventListener("click", goForward);
denyEntryBtn.addEventListener("click", goBack);

let runSlides = () => {
  console.log("     Slide: " + slide);
  inputs[slide].click();
  if (slide === 16) {
    slide = 0;
  } else {
    slide++;
  }
};

setInterval(runSlides, 3000);
