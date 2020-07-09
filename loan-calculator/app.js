const calculateBtn = document.getElementById("calculate-btn");

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
  monthlyPaymentElement.value = monthlyPayment;
  totalPaymentElement.value = totalPayment;
  totalInterestElement.value = totalInterest;
}

calculateBtn.addEventListener("click", calculateValue);

/* 
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
*/
