//tab event

document.addEventListener("DOMContentLoaded", function () {
  const content4NavLi = document.querySelectorAll(".contant4_nav_ul li");
  const content4SubLi = document.querySelectorAll(
    ".contant4_nav_box_wrap > div"
  );

  content4NavLi.forEach((elem, index) => {
    elem.addEventListener("click", (e) => {
      if (e.target == content4NavLi[index]) {
        content4SubLi.forEach((a) => {
          a.classList.remove("show");
        });
        content4SubLi[index].classList.add("show");
      }
    });
  });
});

//건물형태
//li 두 번 누르면 text 배열에서 빼기

const filterBox = document.querySelector(".contant4_condition");
const navBox0 = document.querySelectorAll(".contant4_nav_box0 ul li");
let boolean = true;

let text = [];

function handleArray(arr, a) {
  const index = arr.indexOf(a);
  arr.splice(index, 1);
}

navBox0.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const innerHtml = e.target.innerHTML;
    if (!text.includes(innerHtml) && boolean === true) {
      text.push(innerHtml);
      filterBox.innerHTML = text;
    } else {
      handleArray(text, innerHtml);
      filterBox.innerHTML = text;
    }
  });
});

const navBox1 = document.querySelectorAll(".contant4_nav_box1 ul li");
let text2 = [];

navBox1.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const innerHtml = e.target.innerHTML;
    if (!text2.includes(innerHtml) && boolean === true) {
      text2.push(innerHtml);
      filterBox.innerHTML = text2;
    } else {
      handleArray(text2, innerHtml);
      filterBox.innerHTML = text2;
    }
  });
});
