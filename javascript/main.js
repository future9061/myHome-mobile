
//슬라이드

/*1. dott slide */

const slideWrap = document.querySelector(".slide_wrap");
const slideUl = document.querySelector(".slide_wrap ul");
const slideLi = document.querySelectorAll(".slide_wrap ul li");
let slideUlWidth = slideWrap.offsetWidth * slideLi.length;


window.addEventListener("resize", function () {
  slideUlWidth = slideWrap.offsetWidth * slideLi.length;
  slideUl.style.width = `${slideUlWidth}px`;
});


slideUl.style.width = `${slideUlWidth}px`;
let slideLiWid = slideLi[0].offsetWidth;
const dott = document.querySelectorAll(".dott_wrap li");

dott.forEach((elem, index) => {
  elem.addEventListener("click", function (e) {
    dott.forEach((item) => {
      item.classList.remove("color_change");
    });

    e.target.classList.add("color_change");
    slideUl.style.transform = `translateX(-${slideLiWid * index}px)`;
    slideUl.style.transition = `0.2s`;
  });
});

/*2.  swiper */
let moveValue;
let click = false;

slideLi.forEach((elem, idx) => {

  elem.addEventListener('mousedown', function (e) {
    click = true;
    moveValue = e.clientX;
  });

  elem.addEventListener('mousemove', function (e) {
    if (click) {
      const diff = moveValue - e.clientX;
      slideUl.style.transform = `translateX(-${(slideLiWid * idx) + diff}px)`;
    }
  });

  elem.addEventListener('mouseup', function (e) {
    click = false;
    const diff = moveValue - e.clientX;

    if (diff > 100 && idx < slideLi.length - 1) {
      slideUl.style.transform = `translateX(-${slideLiWid * (idx + 1)}px)`;
      slideUl.style.transition = `0.2s`;
      dott.forEach((item) => {
        item.classList.remove("color_change");
      });
      dott[idx + 1].classList.add("color_change");
    } else if (diff < -100 && idx > 0) {
      slideUl.style.transform = `translateX(-${slideLiWid * (idx - 1)}px)`;
      slideUl.style.transition = `0.2s`;
      dott.forEach((item) => {
        item.classList.remove("color_change");
      });
      dott[idx - 1].classList.add("color_change");
    } else {
      slideUl.style.transform = `translateX(-${slideLiWid * idx}px)`;
      slideUl.style.transition = `0.2s`;
    }
    setTimeout(() => { slideUl.style.transition = `none`; }, 200)
  });
});


/*2.  touch swiper */
let touchValue;
let finger = false;

slideLi.forEach((elem, idx) => {

  elem.addEventListener('touchstart', function (e) {
    finger = true;
    touchValue = e.touches[0].clientX;
  });

  elem.addEventListener('touchmove', function (e) {
    if (finger) {
      const diff = touchValue - e.touches[0].clientX;
      slideUl.style.transform = `translateX(-${(slideLiWid * idx) + diff}px)`;
    }
  });

  elem.addEventListener('touchend', function (e) {
    finger = false;
    const diff = touchValue - e.changedTouches[0].clientX;

    if (diff > 100 && idx < slideLi.length - 1) {
      slideUl.style.transform = `translateX(-${slideLiWid * (idx + 1)}px)`;
      slideUl.style.transition = `0.2s`;
      dott.forEach((item) => {
        item.classList.remove("color_change");
      });
      dott[idx + 1].classList.add("color_change");
    } else if (diff < -100 && idx > 0) {
      slideUl.style.transform = `translateX(-${slideLiWid * (idx - 1)}px)`;
      dott.forEach((item) => {
        item.classList.remove("color_change");
      });
      dott[idx - 1].classList.add("color_change");
    } else {
      slideUl.style.transform = `translateX(-${slideLiWid * idx}px)`;
      slideUl.style.transition = `0.2s`;
    }
    setTimeout(() => { slideUl.style.transition = `none`; }, 200);
  });
});

//json
const content2ItemWrap = document.querySelector(".contant2_item_wrap");
const content2More = document.querySelector(".content2_more_wrap button ");
let btnToggle = true;

fetch("./data/product.json")
  .then((res) => res.json())
  .then((data) => {

    let copyData = [...data];

    function forLoop(a, b) {
      for (let i = 0; i < b; i++) {
        let contentItem = `
      <div class="item" >
          <div class="img_wrap">
            <img src="${a[i].img}" alt="item-img" />
          </div>
          <i class="fa-regular fa-heart color"></i>
          <div class="item_text">
           <h3>${a[i].title}</h3>
           <p>${a[i].room}</p>
           <small class="item_infor">${a[i].contant}</small>
          </div>
        </div >
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


//클릭 시 side menu 나타난다.

const sideBtn = document.querySelector(".content2_btn_wrap");
const sideMenu = document.querySelector(".side_menu");

sideBtn.addEventListener("click", function () {
  sideMenu.classList.add("right");
});

const sideClose = document.querySelector(".contant3_nav_left");

sideClose.addEventListener("click", function () {
  sideMenu.classList.remove("right");
});
