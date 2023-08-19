

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
