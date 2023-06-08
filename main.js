/*1. slide */

const slideWrap = document.querySelector(".slide_wrap"); //container
const slideUl = document.querySelector(".slide_wrap ul"); //ul
const slideLi = document.querySelectorAll(".slide_wrap ul li");
const slideUlWidth = slideWrap.offsetWidth * slideLi.length;

slideUl.style.width = `${slideUlWidth}px`;

window.addEventListener("resize", function () {
  const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
  slideUl.style.width = `${slideUlWidth}px`;
});

let mouseDownValue = 0;
let mouseMoveValue = 0;
const slideLiWid = slideLi[0].offsetWidth;
let userClick = false;

//for문으로 돌리는데...
slideLi[0].addEventListener("mousedown", function (e) {
  mouseDownValue = e.clientX;
  userClick = true;
});

slideLi[0].addEventListener("mousemove", function (e) {
  let mouseMoveValue = e.clientX;
  let totalValue = mouseMoveValue - mouseDownValue;

  if (userClick === true) {
    let slideUlMargin = parseInt(window.getComputedStyle(slideUl).marginLeft);

    if (slideUlMargin <= 0 && totalValue < 0) {
      slideUl.style.marginLeft = `${totalValue}px`;
    }
  }
});

//3.mouseup
slideLi[0].addEventListener("mouseup", function () {
  userClick = false;

  if (mouseDownValue - mouseMoveValue > slideLiWid * 0.4) {
    slideUl.style.marginLeft = `-${slideLi[0].offsetWidth}px`;
  } else {
    //40%가 안되면 .. 움직이지마
  }
});

//touch

// slideLi[0].addEventListener("touchstart", function (e) {
//   mouseDownValue = e.touches[0].clientX;
//   userClick = true;
// });

// slideLi[0].addEventListener("touchmove", function (e) {
//   let mouseMoveValue = e.touches[0].clientX;
//   let totalValue = mouseMoveValue - mouseDownValue;

//   if (userClick === true) {
//     let slideUlMargin = parseInt(window.getComputedStyle(slideUl).marginLeft);

//     if (slideUlMargin <= 0 && totalValue < 0) {
//       slideUl.style.marginLeft = `${totalValue}px`;
//     }
//   }
// });

// slideLi[0].addEventListener("touchend", function (e) {
//   userClick = false;

//   if (e.changedTouches[0].clientX > slideLiWid * 0.4) {
//     slideUl.style.marginLeft = `-${slideLi[0].offsetWidth}px`;
//   } else {
//     //40%가 안되면 .. 움직이지마
//   }
// });
