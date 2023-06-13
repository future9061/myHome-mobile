# mobile (pwa 모바일 만들기!)

사용 skills👍<br/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
  
  <p>main page의 script 설명😆</p>
  <br />
  
  <strong>1.swiper</strong>
  
  <p>1-1. DOM요소 변수 선언하기</p>
  <small> slideUl은 marginLeft로 이동시키며, 
  확장성을 고려해 ul의 width는 slideli.length를 곱한 값을 줌으로써 li가 추가되면 ul의 width값도 커짐 
  </small>
    
```javascript
const slideWrap = document.querySelector(".slide_wrap"); 
const slideUl = document.querySelector(".slide_wrap ul"); 
const slideLi = document.querySelectorAll(".slide_wrap ul li");
const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
```

 <br />
 <p>1-2. resize event</p>
 ```javascript
 window.addEventListener("resize", function () {
 const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
 slideUl.style.width = `${slideUlWidth}px`;
});
```

 
  <br />
 <p>1-3.mousedown, mousemove, mouseuup event</p>
 

 ```javascript
 let mouseDownValue = 0;
let mouseMoveValue = 0;
const slideLiWid = slideLi[0].offsetWidth;
let userClick = false;

//for문으로 돌리는데...li index 1의 ml값 index2의 ml값 구해놓고if 문으로 넣기
//조건 let num0과 li 인덱스가 같으면 넘기기

//1.사용자가 mouse를 찍고, 마우스가 움직이는 px값을 구하기 위해
//li마다 적용되야 하니 forEach 돌림
slideLi.forEach((elem, index) => {
  elem.addEventListener("mousedown", function (e) {
    mouseDownValue = e.clientX;
    userClick = true;
  });

//2.요소 위 마우스 움직이는 만큼 slideUl도 움직임
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

  //3.특정 값 이상 움직인 다음 마우스 떼면 슬라이드 넘어가기
  slideLi[index].addEventListener("mouseup", function (e) {
    userClick = false;

    if (totalValue < -100) {
      slideUl.style.marginLeft = `-${slideLi[index].offsetWidth}px`;
    } else {
      slideUl.style.marginLeft = `0`;
    }
  });
});


//여기서부터
/*1. slide */

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

//for문으로 돌리는데...li index 1의 ml값 index2의 ml값 구해놓고if 문으로 넣기
//조건 let num0과 li 인덱스가 같으면 넘기기

slideLi.forEach((elem, index) => {
  elem.addEventListener("mousedown", function (e) {
    mouseDownValue = e.clientX;
    userClick = true;
  });

  let slideUlMargin1 = parseInt(window.getComputedStyle(slideUl).marginLeft);
  let slideUlMargin2 = slideLi[0].offsetWidth;
  //slideUlMargin2에 해당 li의 length 곱해서 marginLeft 값 지

  elem.addEventListener("mousemove", function (e) {
    let mouseMoveValue = e.clientX;
    3;
    totalValue = mouseMoveValue - mouseDownValue; //??px 이상 움직이면 조건

    setTimeout(function () {
      if (userClick === true) {
        if (slideUlMargin1 <= 0 && totalValue < 0) {
          slideUl.style.marginLeft = `${totalValue}px`;
        }
      }
    }, 500);
  });
  1;
  let currentImg = 0;

  //3.mouseup
  slideLi[index].addEventListener("mouseup", function (e) {
    userClick = false;

    if (totalValue < -100) {
      let marginLeft = 0;
      if (currentImg === 1) {
        marginLeft -= slideUlMargin2;
        console.log(marginLeft);
        slideUl.style.marginLeft = `${marginLeft}px`;
        currentImg += 1;
      }

      if (currentImg === 2) {
        // marginLeft -= slideUlMargin2;
        // slideUl.style.marginLeft = `${marginLeft}px`;
        // currentImg += 1;
      } else {
        console.log("?");
      }
    } else {
      slideUl.style.marginLeft = `0px`;
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
 
 ```
 
  
 
