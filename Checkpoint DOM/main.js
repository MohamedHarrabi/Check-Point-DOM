//About Btn Remove  
let deleteBtn = document.querySelectorAll('.remove_btn');
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function () {
    deleteBtn[i].parentElement.parentElement.remove();
//total
    totalPrice();
  });
}

// About Btn Plus
let plusBtn = document.getElementsByClassName('btn-plus');
for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;
//total
    totalPrice();
  });
}

// About Btn Moins
let minusBtn = document.getElementsByClassName('btn-moins');
for (let minus of minusBtn) {
  minus.addEventListener('click', function () {
    if (minus.nextElementSibling.innerText > 0) {
      minus.nextElementSibling.innerText--;
    }
//total
    totalPrice();
  });
}

// Calculer Prix total
function totalPrice() {

  let productPrice = document.getElementsByClassName('price');
  let productQuantity = document.getElementsByClassName('quantityprod');
  let sum = 0;
  for (let i = 0; i < productPrice.length; i++) {
    sum += productPrice[i].innerText * productQuantity[i].innerText;
  }
  document.getElementById('prix-total').innerText = sum;
}
