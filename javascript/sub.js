
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
let copyProduct;

axios.get('../data/product.json')
  .then(response => {
    copyProduct = [...response.data]
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

//조회하기 버튼을 클릭하면 div안의 li들의 text와 data를 비교해야해

//유저가 선택한 li의 text를 꺼내 배열에 넣는다. 보증금과 월세는 글자와 숫자를 제외하고 number로 변환해 넣는다.
// const liTextArray = Array.from(userSelec).map(li => li.textContent);

const CHECK_BTN = document.querySelector('.filter-btn');
let userResult = [];
let matchedData;

function filterData(keyName) {
  copyProduct.filter((elem) => {
    Object.keys(elem).some(key => {
      if (key === keyName) {
        const value = elem[key];
        return userResult.some(item => {
          if (item.type === keyName && value <= item.value) {
            matchedData.push(elem); // 배열에 해당 item 이 있나 확인 후 넣기
          }
        });
      }
    });
  });
}



CHECK_BTN.addEventListener('click', function () {
  const userSelec = document.querySelectorAll('.user-select li');

  Array.from(userSelec).map(li => {
    const text = li.textContent;
    // '이하'라는 텍스트가 포함된 요소 처리
    if (text.includes('보증금')) {
      const D_PRICE = text.replace(/이하|,|원|보증금|/g, '');

      const DEPOSIT_CHOOSE = parseInt(D_PRICE); // 숫자로 변환하여 반환
      userResult.push({ type: 'deposit', value: DEPOSIT_CHOOSE })
    } else if (text.includes('월세금')) {
      const M_PRICE = text.replace(/이하|,|원|월세금|/g, '');

      const MONTHLY_CHOOSE = parseInt(M_PRICE); // 숫자로 변환하여 반환
      userResult.push({ type: 'monthly', value: MONTHLY_CHOOSE })
    } else {
      userResult.push(text)
    }
  });

  //userResult의 배열에 number 보증금이냐 월세금이나 구분해야해
  matchedData = copyProduct.filter(elem =>
    Object.values(elem).some(value => (typeof value === 'string' && userResult.some(keyword => value.includes(keyword)))
    )
  );

  filterData('deposit');
  filterData('monthly');

})