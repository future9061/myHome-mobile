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
      if (userClick) {
        if (slideUlMarginLeft == 0 && totalValue <= 0) {
          slideUl.style.marginLeft = `${totalValue}px`;
        }
      }
    });
  },
  300
);
//3.mouseup li의 40%이상 당겼으면 넘어가기

let slideWrapWidth = slideWrap.offsetWidth;

slideLi[0].addEventListener("mouseup", function (e) {
  userClick = false;
  console.log(userClick, "?");

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

//json
const content2ItemWrap = document.querySelector(".contant2_item_wrap");
const content2More = document.querySelector(".content2_more_wrap button ");
let btnToggle = true;

fetch("./data/product.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.length);

    let copyData = [...data];

    function forLoop(a, b) {
      for (let i = 0; i < b; i++) {
        let contentItem = `
        <div class="contant2_item">
          <div class="contant2_img_wrap">
            <img src="${a[i].img}" alt="item-img" />
          </div>
          <i class="fa-regular fa-heart color"></i>
          <div class="contant2_item_text">
           <h3>${a[i].title}</h3>
           <p>${a[i].room}</p>
           <small class="contant2_item_infor">${a[i].contant}</small>
          </div>
        </div>
        `;

        content2ItemWrap.insertAdjacentHTML("beforeend", contentItem);
      }
    }

    forLoop(copyData, 4);

    content2More.addEventListener("click", function () {
      if (btnToggle === true) {
        content2ItemWrap.innerHTML = "";

        forLoop(copyData, copyData.length);

        content2More.innerHTML = "닫기";
        btnToggle = false;
      } else if (btnToggle === false) {
        content2ItemWrap.innerHTML = "";

        forLoop(copyData, 4);

        content2More.innerHTML = "더 보기";
        btnToggle = true;
      }
    });
  })
  .catch(function (error) {
    console.log(error);
  });

//side menu 나타나는

const sideBtn = document.querySelector(".content2_btn_wrap");
const sideMenu = document.querySelector(".side_menu");

sideBtn.addEventListener("click", function () {
  sideMenu.classList.add("right");
});

const sideClose = document.querySelector(".contant3_nav_left");
console.log(sideClose);

sideClose.addEventListener("click", function () {
  sideMenu.classList.remove("right");
});
