# 🎇목차

1. [💻프로젝트 소개](#-프로젝트-소개)
2. [📦 개발 환경](#-개발-환경)
3. [✍ 주요 기능 소개](#-주요-기능-소개)
   - [메인 페이지 img slide](#-메인-페이지-img-slide)
   - [조건으로 상품 조회하기](#-조건으로-상품-조회하기)
   - [상품 찜하기](#✔-상품-찜하기)
   - [상품 더보기 버튼](#✔-상품-더보기-버튼)
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

### ✔ 메인 페이지 img slide

#### [코드 보기](#img-slide)

 <br />
 이미지 하단의 버튼을 클릭하면 슬라이드 됩니다. <br>
 그동안의 이미지 슬라이드와 똑같이 marginLeft로 img container를 이동시키는 방식으로 구현했습니다. <br> 다만 항상 윈도우의 크기에 따라 슬라이드의 크기가 맞지 않는 문제가 resize때문인 것을 알게 되어 resize 이벤트를 추가하였습니다.

   <img src="" width="50%">

<br />

### ✔ 조건으로 상품 조회하기

#### [코드 보기](#filter)

 <br />
 filter를 통해 지정한 키워드와 관련된 상품만 조회합니다.

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
  json file 에서 가져온 상품을 모두 보여줍니다.

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

#### img slide

```javascript
const slideWrap = document.querySelector(".slide_wrap");
const slideUl = document.querySelector(".slide_wrap ul");
const slideLi = document.querySelectorAll(".slide_wrap ul li");
const slideUlWidth = slideWrap.offsetWidth * slideLi.length;
```
