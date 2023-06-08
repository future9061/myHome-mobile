# mobile

<h2>pwa 모바일 만들기!</h2>
  
  <h4>main page의 script 설명</h4>
  
  
```
const slideWrap = document.querySelector(".slide_wrap"); //container
const slideUl = document.querySelector(".slide_wrap ul"); //ul
const slideLi = document.querySelectorAll(".slide_wrap ul li");
const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
let totalValue = 0;
```
