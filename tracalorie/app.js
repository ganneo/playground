// creating varables
const addMealBtn = document.getElementById("add-meal-btn");
const updateMealBtn = document.getElementById("update-meal-btn");
const deleteMealBtn = document.getElementById("delete-meal-btn");
const backBtn = document.getElementById("back-btn");
const ulElement = document.getElementById("meal-list");
const inputMeal = document.getElementById("meal");
const inputCalories = document.getElementById("calories");

// ul ctrl class
class UICtrl {
  static hideUl() {
    ulElement.style.display = "none";
  }

  static showUl() {
    ulElement.style.display = "block";
  }

  static hideBtn(btnIdArray) {
    btnIdArray.forEach((ele) => {
      document.getElementById(ele).style.display = "none";
    });
  }

  static showBtn(btnIdArray) {
    btnIdArray.forEach((ele) => {
      document.getElementById(ele).style.display = "inline";
    });
  }

  static clearInput() {
    inputMeal.value = "";
    inputCalories.value = "";
  }

  static paintInput(mealCalorieObj) {
    inputMeal.value = mealCalorieObj.meal;
    inputCalories.value = mealCalorieObj.calorie;
  }

  static addItemToUl(liText) {
    this.clearInput();
    this.showUl();
    const liElement = document.createElement("LI");
    liElement.className = "collection-item";
    liElement.innerHTML = `
    ${liText}
    <i class="material-icons secondary-content brush">brush</i>`;
    ulElement.appendChild(liElement);
  }
}

// states class
class States {
  static addMealState() {
    UICtrl.hideBtn(["update-meal-btn", "delete-meal-btn", "back-btn"]);
    UICtrl.showBtn(["add-meal-btn"]);
  }

  static changeMealState() {
    UICtrl.showBtn(["update-meal-btn", "delete-meal-btn", "back-btn"]);
    UICtrl.hideBtn(["add-meal-btn"]);
  }
}

States.addMealState();

// event listener for input meal btn
inputMeal.addEventListener("keyup", () => {
  if (inputMeal.value === " ") {
    alert("Please don't start your meal with a space");
    inputMeal.value = "";
    return;
  }
});

let inputMealValue;
let inputCalorieValue;

// event listener for add meal btn
addMealBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputMeal.value || !inputCalories.value || inputCalories.value < 0) {
    return;
  }

  inputMealValue = inputMeal.value;
  inputCalorieValue = inputCalories.value;
  UICtrl.addItemToUl(`${inputMeal.value}: ${inputCalories.value} calories`);
});

// event listener for meal list
ulElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("brush")) {
    States.changeMealState();
    console.log(e.target.parentNode.firstChild);

    const mealCalorieObj = {
      meal: inputMealValue,
      calorie: inputCalorieValue,
    };

    UICtrl.paintInput(mealCalorieObj);
  }
});

// event listener for update meal btn
updateMealBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addMealBtn.click();
  UICtrl.clearInput();
  States.addMealState();
});

// even listener for delete meal btn
deleteMealBtn.addEventListener("click", (e) => {
  e.preventDefault();
  UICtrl.clearInput();
  States.addMealState();
});
