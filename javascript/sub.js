
//조건 필터링하고 상품 조회

//tab
const MENU = document.querySelectorAll(".menu-inner li ");
const TAB = document.querySelectorAll(".condition > div")

MENU.forEach((elem, idx) => {
  elem.addEventListener('click', function (e) {
    TAB.forEach((e) => {
      e.classList.remove('show')
    })
    TAB[idx].classList.add('show')
  })
})

// li를 클릭하면 해당 li의 innerHTML이 localStorage에 저장되고
// 그 localStorage의 값은 div에 보인다
const ITEM = document.querySelectorAll(".condition > div  ul li ");
const SELECT = document.querySelector('.user-select');
let localSave = JSON.parse(localStorage.getItem('조건')) || [];
let btnState;

ITEM.forEach((elem) => {
  elem.btnState = true; //클로저로 btn이 요소마다가 아니라 전체로 공유됨 개별관리
  elem.addEventListener('click', function () {
    let text = this.innerText;

    if (!localSave.includes(text)) {
      localSave.push(text);
      this.btnState = !this.btnState
    } else if (!btnState) {
      localSave = localSave.filter(item => item !== text);
    }

    localStorage.setItem('조건', JSON.stringify(localSave));
    SELECT.innerHTML = localSave.map(item => `<li>${item}</li>`).join('');
  });
});

/*인풋 이벤트 */
const DEPOSIT = document.querySelector('.deposit-inner input');
const DEPOSIT_SHOW = document.querySelector('.deposit-inner p');
const MONTHLY = document.querySelector('.monthly-inner input');
const MONTHLY_SHOW = document.querySelector('.monthly-inner p');
let totalAmount;

function inputEvent(input, p) {
  input.addEventListener('input', function () {

    let amount = input.value;
    totalAmount = Number(amount).toLocaleString() + '원 이하';

    p.textContent = totalAmount;
  })
}

inputEvent(DEPOSIT, DEPOSIT_SHOW)
inputEvent(MONTHLY, MONTHLY_SHOW)

//적용 버튼을 누르면 value가 localstorage '조건'에 들어감
//지우기 버튼 누르면 value랑 같은 item 찾아서 지움
const APPLY = document.querySelectorAll('.apply');
const CANCEL = document.querySelectorAll('.cancel');
const INPUT_LANGE = document.querySelectorAll('.input input');
const INPUT_P = document.querySelectorAll('.input p');
let toggBtn;
let money;

APPLY.forEach((elem, idx) => {
  elem.toggBtn = true;

  elem.addEventListener('click', function (e) {
    money = e.target.id + totalAmount;

    if (elem.toggBtn) {
      localSave.push(money)
      this.toggBtn = false;
    }

    SELECT.innerHTML = localSave.map(item => `<li>${item}</li>`).join('');
  })


  CANCEL[idx].addEventListener('click', function () {

    if (localSave.includes(money)) {
      elem.toggBtn = true;
      INPUT_P[idx].textContent = '';
      INPUT_LANGE[idx].value = 0;
      localSave = localSave.filter(item => item !== money);

      SELECT.innerHTML = localSave.map(item => `<li>${item}</li>`).join('');
    }
  })
})

//상품 정렬product-wrap
const SHOW_PRODUCT = document.querySelector('.product-wrap');

axios.get('../data/product.json')
  .then(response => {
    let copyProduct = [...response.data]
    copyProduct.forEach((elem) => {
      let filterItem = `
      <div class="item" >
       <div class="img_wrap">
          <img src="${elem.img}" alt="item-img" />
       </div>
       <i class="fa-regular fa-heart color"></i>
       <div class="item_text">
        <h3>${elem.title}</h3>
        <p>${elem.room}</p>
        <small class="item_infor">${elem.contant}</small>
       </div>
      </div >`
      SHOW_PRODUCT.insertAdjacentHTML("beforeend", filterItem);
    })
  })
  .catch(error => {
    console.error('Error:', error);
  });

