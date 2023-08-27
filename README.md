# 🎇목차

1. [💻프로젝트 소개](#-프로젝트-소개)
2. [📦 개발 환경](#-개발-환경)
3. [✍ 주요 기능 소개](#-주요-기능-소개)
   - [img swiper 및 touch slide](#-img-swiper-및-touch-slide)
   - [조건으로 상품 조회하기](#-조건으로-상품-조회하기)
   - [상품 찜하기](#-상품-찜하기)
   - [상품 더보기 버튼](#-상품-더보기-버튼)
   - [지도 보기](#-지도-보기)
4. [🧾 code review](#-code-review)

   <br />

## 💻 프로젝트 소개

<div align="center">
  
   <img src="" alt="이미지" width="50%">

   <p align="start">
   모바일 웹앱 프로젝트를 구상하던 중 자주 사용하던 다방, 직방 앱을 내가 원하는 UI로 만들어보면 어떨까? 생각이 들어 UI부터 기능까지 전부 직접 제작한 MyHome 앱입니다. <br />
   모바일 전용으로 데스크탑 크기는 지원되지 않습니다.
   </p>
</div>

<br>

## 📦 개발 환경

- **editor** : <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/>
- **language** : <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
- **skill** : <img src="https://img.shields.io/badge/pwa-5A0FC8?style=flat-square&logo=pwa&logoColor=white"/>

<br />

## ✍ 주요 기능 소개

### ✔ img swiper 및 touch slide

#### [코드 보기](#img-slide)

 <br />
바닐라 자바스크립트로 버튼 클릭 시 이동되는 슬라이드를 자주 구현했었는데, 이번에는 swiper를 구현해보았습니다 <br />
모바일 전용 앱이기 때문에 touch 이벤트 추가하였고 도트 클릭 시에도 움직이는 슬라이드 입니다. <br />
또한 그동안의 슬라이드는 모니터 크기에 따라 반응형이 되지 않는 문제가 있었는데 resize 이벤트로 그동안의 문제점을 보완했습니다.

<img src="" width="50%">

<br />

### ✔ 조건으로 상품 조회하기

#### [코드 보기](#filter)

 <br />
 방을 조회할 때 사용자가 원하는 조건을 선택하면, 선택한 조건과 모두 부합하는 방을 찾아주는 기능입니다.
 선택한 조건은 localStorage에 저장되며 조회하기 버튼을 클릭하면 상품의 data와 filter하여 상품을 조회합니다.

   <img src="" width="50%">

<br />

### ✔ 상품 찜하기

#### [코드 보기](#product-select)

 <br />
 상품의 하트를 누르면 해당 상품을 저장합니다. 저장된 상품은 사이드 메뉴의 "찜한 방" 카테고리나 상단 하트를 클릭하면 확인할 수 있습니다.

  <img src="" width="50%">

<br />

### ✔ 상품 더보기 버튼

#### [코드 보기](#more-btn)

 <br />
  더보기 버튼 클릭 시 json file 에서 가져온 상품을 모두 보여줍니다.

  <img src="" width="50%">

<br />

### ✔ 지도 보기

#### [코드 보기](#map-api)

 <br />
  방을 찾는 앱이니만큼 카카오 지도 api를 가져와 연결했습니다.

  <img src="" width="50%">
<br />

<br />
<br />

## 🧾 code review

<br />

#### ◼ img slide

- **도트 클릭 시 이동하는 slide**

1. 도트 클릭 시 해당 이미지의 width 만큼 슬라이드가 translateX로 이동합니다.
2. 클릭한 도트는 class를 추가해 색깔을 변경합니다.

```javascript
const slideWrap = document.querySelector(".slide_wrap");
const slideUl = document.querySelector(".slide_wrap ul");
const slideLi = document.querySelectorAll(".slide_wrap ul li");
let slideUlWidth = slideWrap.offsetWidth * slideLi.length; //ul의 너비값을 동적으로 가져옴

window.addEventListener("resize", function () {
  //반응형을 위해 윈도우의 창 크기가 바뀌면 ul의 너비값을 새로 가져옴
  slideUlWidth = slideWrap.offsetWidth * slideLi.length;
  slideUl.style.width = `${slideUlWidth}px`;
});

slideUl.style.width = `${slideUlWidth}px`;
let slideLiWid = slideLi[0].offsetWidth; //슬라이드가 이동해야 하는 값은 li의 너비값, 마찬가지로 동적으로 가져온다.
const dott = document.querySelectorAll(".dott_wrap li");

//dott를 클릭 시 color class를 추가하고 ul을 이동시킨다.
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
```

<br />

- **swiper** : 사용자가 이미지를 클릭하고, 움직이며 마우스를 떼는 과정을 구현하기 위해 mousedown, mousemove, mouseup 이벤트를 활용함

1. 해당 이미지를 클릭하고 움직이는 x축 값을 구한다. (mousedown - mousemove)
2. mousemove 이벤트에서 1번에서 구한 x축 만큼 이미지가 translateX로 움직인다.
3. mouseup 이벤트에서 움직인 x축이 100px 보다 클 시 다음 이미지로 넘어간다.

```javascript
let moveValue; //이미지가 마우스의 움직임에 따라 이동해야 하는 값
let click = false; //사용자가 이미지에서 mouseup시 이미지의 움직임이 멈춰야 하기 때문에 click 변수로 관리

slideLi.forEach((elem, idx) => {
  elem.addEventListener("mousedown", function (e) {
    click = true;
    moveValue = e.clientX;
  });

  elem.addEventListener("mousemove", function (e) {
    if (click) {
      const diff = moveValue - e.clientX;
      slideUl.style.transform = `translateX(-${slideLiWid * idx + diff}px)`;
    }
  });

  elem.addEventListener("mouseup", function (e) {
    click = false;
    const diff = moveValue - e.clientX;
    //이동값이 100px 이상이면서 slide의 idx 마지막까지만 움직이게 조건 부여
    if (diff > 100 && idx < slideLi.length - 1) {
      slideUl.style.transform = `translateX(-${slideLiWid * (idx + 1)}px)`;
      slideUl.style.transition = `0.2s`;
      //도트 이미지의 도트 컬러 바꾸기
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
    setTimeout(() => {
      slideUl.style.transition = `none`;
    }, 200);
  });
});
```

<details><summary>‼ 주의할 점
</summary>
 css 파일에 transtion을 넣어놨었는데, 슬라이드를 여러번 움직이면 transition으로 delay되는 시간 때문에 슬라이드가 이상하게 움직인다. <br >
 때문에 반드시 js 파일에서 transition을 넣어주고 슬라이드 이동이 끝날 시 transition을 없애주는 과정이 필요하다. 
</details>

<br >

- **touch 이벤트** : 기존의 함수를 동일하게 적용하되 이벤트를 touch로 바꿔주고, 인덱스 번호를 추가해줌(손가락 지정)

```javascript
let touchValue;
let finger = false;

slideLi.forEach((elem, idx) => {
  elem.addEventListener("touchstart", function (e) {
    finger = true;
    touchValue = e.touches[0].clientX;
  });

  elem.addEventListener("touchmove", function (e) {
    if (finger) {
      const diff = touchValue - e.touches[0].clientX;
      slideUl.style.transform = `translateX(-${slideLiWid * idx + diff}px)`;
    }
  });

  elem.addEventListener("touchend", function (e) {
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
    setTimeout(() => {
      slideUl.style.transition = `none`;
    }, 200);
  });
});
```

<br>

#### ◼ more btn

1. 상품 데이터를 fetch로 가져와 json으로 변환한다.
2. 문자로 html 태그를 만들고 for 문으로 data를 할당한다.

```javascript
const content2ItemWrap = document.querySelector(".contant2_item_wrap"); //상품 보여줄 공간

fetch("./data/product.json")
  .then((res) => res.json())
  .then((data) => {
    let copyData = [...data]; //data의 copy본 만듦

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

    forLoop(copyData, 4); //버튼 클릭 이전에는 상품을 4개만 보여준다.
  });
```

3. 더 보기 버튼은 토글로 관리하며, true일 시엔 닫기, false일 땐 더 보기 텍스트를 보여준다.
4. 더 보기 버튼 클릭 시 기존의 상품을 모두 지우고 모든 상품을 보여준다.

```javascript
const MoreBtn = document.querySelector(".button ");
let btnToggle = true;

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
  .catch(function (error) {
    console.log(error);
  });

```
