// Grap elements
const bill = document.getElementById("amount");
const btns = document.querySelectorAll(".percentage");
const custom = document.querySelector(".custom");
const numOfPeople = document.getElementById("people-entry");
const tipValue = document.querySelector(".tip-value");
const totalValue = document.querySelector(".total-value");
const error = document.querySelector(".error");
const reset = document.querySelector(".reset");

// Event Listeners
btns.forEach(function (btn) {
  btn.addEventListener("click", calculate);
});

custom.addEventListener("keyup", customCalculate);

reset.addEventListener("click", resetValues);

// Functions
function calculate(e) {
  btns.forEach(function (btn) {
    let b = e.currentTarget;
    if (btn === b) {
      if (numOfPeople.value <= 0) {
        error.classList.add("show-error");
        return;
      }
      error.classList.remove("show-error");
      b.style.color = "hsl(183, 100%, 15%)";
      b.style.background = "rgb(150, 238, 238)";
      calculator(b);
    } else {
      btn.style.color = "white";
      btn.style.background = "hsl(183, 100%, 15%)";
    }
  });
}

function customCalculate(e) {
  if (!custom.value <= 0) {
    btns.forEach(function (btn) {
      btn.style.color = "white";
      btn.style.background = "hsl(183, 100%, 15%)";
    });

    calculator(custom);
  }
}

function calculator(b) {
  let tip = 0;
  if (b.textContent.includes("%")) {
    tip =
      (parseFloat(bill.value) *
        parseFloat(b.textContent.slice(0, b.textContent.length - 1))) /
      (parseInt(numOfPeople.value) * 100);
  } else {
    tip =
      (parseFloat(bill.value) * parseFloat(b.value)) /
      (parseInt(numOfPeople.value) * 100);
  }

  let total = tip * parseInt(numOfPeople.value);

  tip = Math.round(tip * 100) / 100;
  tip = tip.toFixed(2);
  tipValue.textContent = `$${tip}`;

  total = (total + parseFloat(bill.value)) / parseInt(numOfPeople.value);
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  totalValue.textContent = `$${total}`;
}

function resetValues() {
  tipValue.textContent = "$0.00";
  totalValue.textContent = "$0.00";
}
