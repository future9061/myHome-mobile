# mobile

<h2>pwa 모바일 만들기!</h2>
  
  <h4>main page의 script 설명😆</h4>
  
  <p>1. DOM요소 변수 선언하기</p>
    <>
```ruby
const slideWrap = document.querySelector(".slide_wrap"); 
const slideUl = document.querySelector(".slide_wrap ul"); 
const slideLi = document.querySelectorAll(".slide_wrap ul li");
const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
```
