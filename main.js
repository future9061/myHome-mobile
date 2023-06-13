/*1. swiper slide */

const slideWrap = document.querySelector(".slide_wrap"); //container
const slideUl = document.querySelector(".slide_wrap ul"); //ul
const slideLi = document.querySelectorAll(".slide_wrap ul li");
const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
let totalValue = 0;

slideUl.style.width = `${slideUlWidth}px`;

window.addEventListener("resize", function () {
  const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
  slideUl.style.width = `${slideUlWidth}px`;
});

let mouseDownValue = 0;
let mouseMoveValue = 0;
const slideLiWid = slideLi[0].offsetWidth;
let userClick = false;

slideLi[0].addEventListener("mousedown", function (e) {
  mouseDownValue = e.clientX;
  userClick = true;
});

slideUlMarginLeft = parseInt(window.getComputedStyle(slideUl).marginLeft); //0

slideLi[0].addEventListener(
  "mousemove",
  function (e) {
    let mouseMoveValue = e.clientX;
    totalValue = mouseMoveValue - mouseDownValue;
    console.log(userClick);

    setTimeout(function () {
      if (userClick == true) {
        if (slideUlMarginLeft == 0 && totalValue <= 0) {
          slideUl.style.marginLeft = `${totalValue}px`;
        }
      }
      if (userClick == false) {
        slideUl.style.marginLeft = `0px`;
      }
    });
  },
  300
);
//3.mouseup li의 40%이상 당겼으면 넘어가기

let slideWrapWidth = slideWrap.offsetWidth;

slideLi[0].addEventListener("mouseup", function (e) {
  userClick = false;

  // if (slideWrapWidth * 0.4 < totalValue) {
  //   console.log("?");
  // } else {
  // }
});

//     if (totalValue < -100) {
//       let marginLeft = 0;
//       if (currentImg === 1) {
//         marginLeft -= slideUlMargin2;
//         console.log(marginLeft);
//         slideUl.style.marginLeft = `${marginLeft}px`;
//         currentImg += 1;
//       }

//       if (currentImg === 2) {
//         // marginLeft -= slideUlMargin2;
//         // slideUl.style.marginLeft = `${marginLeft}px`;
//         // currentImg += 1;
//       } else {
//         console.log("?");
//       }
//     } else {
//       slideUl.style.marginLeft = `0px`;
//     }
//   });
// });

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

//dott slide

let dott = document.querySelectorAll(".dott_wrap li");

dott.forEach((elem, index) => {
  elem.addEventListener("click", function (e) {
    dott.forEach((item) => {
      item.classList.remove("color_change");
    });

    e.target.classList.add("color_change");

    let marginValue = -(slideWrap.offsetWidth * index) + "px";
    slideUl.style.marginLeft = `${marginValue}`;
  });
});

const content2ItemWrap = document.querySelector(".contant2_item_wrap");
fetch("./data/product.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.length);

    let copyData = [...data];

    copyData.forEach(function (elem, index) {
      let divEl = document.createElement("div");
      divEl.classList.add("contant2_item");

      divEl.innerHTML = `
      <img src="${elem.img}" alt="item-img" />
      <i class="fa-regular fa-heart color"></i>
      <div class="contant2_item_text">
       <h3>${elem.title}</h3>
       <p>${elem.room}</p>
       <small class="contant2_item_infor">고층, 15평, 관리비 7만</small>
     </div>
      `;

      content2ItemWrap.append(divEl);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
