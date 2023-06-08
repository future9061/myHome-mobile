/*1. slide */

const slideWrap = document.querySelector(".slide_wrap"); //container
const slideUl = document.querySelector(".slide_wrap ul"); //ul
const slideLi = document.querySelectorAll(".slide_wrap ul li");
const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
let totalValue = 0;

let slideUlMargin1 = parseInt(window.getComputedStyle(slideUl).marginLeft);
let slideUlMargin2 = slideLi[0].offsetWidth;
//slideUlMargin2에 해당 li의 length 곱해서 marginLeft 값 지정
console.log(slideUlMargin1, slideUlMargin2 * 1);

slideUl.style.width = `${slideUlWidth}px`;

window.addEventListener("resize", function () {
  const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
  slideUl.style.width = `${slideUlWidth}px`;
});

let mouseDownValue = 0;
let mouseMoveValue = 0;
const slideLiWid = slideLi[0].offsetWidth;
let userClick = false;

//for문으로 돌리는데...li index 1의 ml값 index2의 ml값 구해놓고if 문으로 넣기
//조건 let num0과 li 인덱스가 같으면 넘기기

slideLi.forEach((elem, index) => {
  elem.addEventListener("mousedown", function (e) {
    mouseDownValue = e.clientX;
    userClick = true;
  });

  elem.addEventListener("mousemove", function (e) {
    let mouseMoveValue = e.clientX;
    totalValue = mouseMoveValue - mouseDownValue; //??px 이상 움직이면 조건
    let currentImg = 0;

    setTimeout(function () {
      if (userClick === true) {
        if (slideUlMargin1 <= 0 && totalValue < 0) {
          slideUl.style.marginLeft = `${totalValue}px`;
        }
      }
    }, 500);
  });

  //3.mouseup
  slideLi[index].addEventListener("mouseup", function (e) {
    userClick = false;

    if (totalValue < -100) {
      slideUl.style.marginLeft = `-${slideLi[index].offsetWidth}px`;
    } else {
      slideUl.style.marginLeft = `0`;
    }
  });
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
