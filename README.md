# mobile

사용 skills👍
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>


<h2>pwa 모바일 만들기!</h2>
  
  <p>main page의 script 설명😆</p>
  <br />
  
  <strong>1.swiper</strong>
  
  
  <p>1-1. DOM요소 변수 선언하기</p>
  <small> slideUl은 marginLeft로 이동시키며, 
  확장성을 고려해 ul의 width는 slideli.length를 곱한 값을 줌으로써 li가 추가되면 ul의 width값도 커짐 
  </small>
    
```ruby
const slideWrap = document.querySelector(".slide_wrap"); 
const slideUl = document.querySelector(".slide_wrap ul"); 
const slideLi = document.querySelectorAll(".slide_wrap ul li");
const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
```

 <br />
 <p>1-2. resize event</p>
 ```ruby
 window.addEventListener("resize", function () {
  const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
  slideUl.style.width = `${slideUlWidth}px`;
});
 ```
 <br />
 <p>1-3.mousedown, mouse</p>
 
  
 
