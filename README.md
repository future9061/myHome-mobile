# mobile

<h2>pwa 모바일 만들기!</h2>
  
  <h4>main page의 script 설명😆</h4>
  <br />
  <p>1. DOM요소 변수 선언하기</p>
  <small> slide의 ul은 marginLeft로 이동시키며, 
  확장성을 고려해 slideUl의 width 값을 지정함.
  ul의 width는 slideli.length를 곱한 값을 줌으로써 li가 추가되면 ul의 width값도 커짐 
  </small>
    
```ruby
const slideWrap = document.querySelector(".slide_wrap"); 
const slideUl = document.querySelector(".slide_wrap ul"); 
const slideLi = document.querySelectorAll(".slide_wrap ul li");
const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
```

 <br />
 <p>2. resize 이벤트</p>
 ```ruby
 window.addEventListener("resize", function () {
  const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
  slideUl.style.width = `${slideUlWidth}px`;
});
 ```
  <br />
 <p>mousen</p>
 
