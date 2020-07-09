const calculateBtn = document.getElementById("calculate-btn");
const loanAmountElement = document.getElementById("loan-amount");
const repaymentYearsElement = document.getElementById("repayment-years");
const annualInterestElement = document.getElementById("annual-interest");
const clearValueBtn = document.getElementById("clear-btn");

function calculateValue() {
  const loanAmount = document.getElementById("loan-amount").value;
  const repaymentYears = document.getElementById("repayment-years").value;
  const annualInterest = document.getElementById("annual-interest").value;
  const totalPayment =
    loanAmount * Math.pow(1 + annualInterest / 100, repaymentYears);
  const monthlyPayment = totalPayment / (repaymentYears * 12);
  const totalInterest = totalPayment - loanAmount;
  const monthlyPaymentElement = document.getElementById("monthly-payment");
  const totalPaymentElement = document.getElementById("total-payment");
  const totalInterestElement = document.getElementById("total-interest");
  monthlyPaymentElement.value = monthlyPayment;
  totalPaymentElement.value = totalPayment;
  totalInterestElement.value = totalInterest;

  if (
    ((monthlyPayment === Infinity, totalPayment === 0), totalInterest === 0)
  ) {
    const card = document.querySelector(".card");
    //   make element
    const pElement = document.createElement("p");
    // add class and add text
    pElement.className =
      "text-danger progress-bar progress-bar-striped progress-bar-animated bg-warning m-auto p-2";
    pElement.textContent = "Please check your numbers";
    // append child
    card.insertBefore(pElement, card.firstChild);
    // make sure only one pElement
    if (
      document.querySelectorAll(
        "p.text-danger.progress-bar.progress-bar-striped.progress-bar-animated.bg-warning.m-auto.p-2"
      ).length > 1
    ) {
      pElement.remove();
    }
    // make time out
    setTimeout(function () {
      pElement.remove();
    }, 3000);
  } else {
    const calculating = document.getElementById("calculating");
    const calculated = document.getElementById("calculated");
    calculating.style.display = "block";
    calculated.style.display = "none";
    setTimeout(function () {
      calculating.style.display = "none";
      calculated.style.display = "block";
    }, 3000);
  }
}

function calculateValueWithEnterKey(e) {
  if (e.keyCode === 13) {
    calculateBtn.click();
  }
}

function clearValues() {
  loanAmountElement.value = "";
  annualInterestElement.value = "";
  repaymentYearsElement.value = "";

  document.getElementById("calculated").style.display = "none";
}

loanAmountElement.addEventListener("keyup", calculateValueWithEnterKey);
annualInterestElement.addEventListener("keyup", calculateValueWithEnterKey);
repaymentYearsElement.addEventListener("keyup", calculateValueWithEnterKey);
calculateBtn.addEventListener("click", calculateValue);
clearValueBtn.addEventListener("click", clearValues);
