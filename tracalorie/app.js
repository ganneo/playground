const addMealBtn = document.getElementById("add-meal-btn");
const updateMealBtn = document.getElementById("update-meal-btn");
const deleteMealBtn = document.getElementById("delete-meal-btn");
const backBtn = document.getElementById("back-btn");
const ulElement = document.getElementById("meal-list");
const inputMeal = document.getElementById("meal");
const inputCalories = document.getElementById("calories");

class UICtrl {
  static hideUl() {
    ulElement.style.display = "none";
  }

  static showUl() {
    ulElement.style.display = "block";
  }

  static hideBtn(btnId) {
    btnId.forEach((ele) => {
      document.getElementById(ele).style.display = "none";
    });
  }

  static showBtn(btnId) {
    btnId.forEach((ele) => {
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

class States {
  constructor() {
    this.id = -1;
  }
  addMealState() {
    UICtrl.hideBtn(["update-meal-btn", "delete-meal-btn", "back-btn"]);
  }

  changeMealState() {
    UICtrl.showBtn(["update-meal-btn", "delete-meal-btn", "back-btn"]);
    UICtrl.hideBtn(["add-meal-btn"]);
  }
}

const states = new States();

states.addMealState();
UICtrl.hideUl();

addMealBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputMeal.value || !inputCalories.value || inputCalories.value < 0) {
    return;
  }

  UICtrl.addItemToUl(`${inputMeal.value}: ${inputCalories.value} calories`);
});

ulElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("brush")) {
    states.changeMealState();
    const mealCalorieString = e.target.parentNode.firstChild.textContent;
    const mealCalorieArray = mealCalorieString.split(":");
    const calorieArray = mealCalorieArray[1].split(" ");
    const mealArray = mealCalorieArray[0].split(" ");
    const mealCalorieObj = {
      meal: mealArray[4],
      calorie: calorieArray[1],
    };
    UICtrl.paintInput(mealCalorieObj);
  }
});
