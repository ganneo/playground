const calculateBtn = document.getElementById("calculate-btn");
const loanAmountElement = document.getElementById("loan-amount");
const annualInterestElement = document.getElementById("annual-interest");
const repaymentYearsElement = document.getElementById("repayment-years");
const clearValueBtn = document.getElementById("clear-btn");

function calculateValue() {
  const loanAmount = document.getElementById("loan-amount").value;
  const annualInterest = document.getElementById("annual-interest").value;
  const repaymentYears = document.getElementById("repayment-years").value;
  const totalPayment =
    loanAmount * Math.pow(1 + annualInterest / 100, repaymentYears);
  const monthlyPayment = totalPayment / (repaymentYears * 12);
  const totalInterest = totalPayment - loanAmount;
  const monthlyPaymentElement = document.getElementById("monthly-payment");
  const totalPaymentElement = document.getElementById("total-payment");
  const totalInterestElement = document.getElementById("total-interest");
  monthlyPaymentElement.value = monthlyPayment.toFixed(2);
  totalPaymentElement.value = totalPayment.toFixed(2);
  totalInterestElement.value = totalInterest.toFixed(2);

  if (!isFinite(monthlyPayment) || totalPayment === 0 || totalInterest === 0) {
    // make sure only one pElement
    if (document.getElementById("error")) {
      return;
    }
    const card = document.querySelector(".card");
    const heading = document.querySelector(".container .card h1");
    //   make element
    const pElement = document.createElement("p");
    pElement.id = "error";
    // add class and add text
    pElement.className =
      "text-danger progress-bar progress-bar-striped progress-bar-animated bg-warning mx-auto p-2";
    pElement.textContent = "Please check your numbers";
    // append child
    card.insertBefore(pElement, heading);
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
    }, 2000);
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
