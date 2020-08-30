class UICtrl {
  constructor(document) {
    this.document = document;
    this.mealItemsUl = document.getElementById("meal-list");
    this.addMealBtn = document.getElementById("add-meal-btn");
    this.updateMealBtn = document.getElementById("update-meal-btn");
    this.deleteMealBtn = document.getElementById("delete-meal-btn");
    this.backBtn = document.getElementById("back-btn");
    this.ulElement = document.getElementById("meal-list");
    this.inputMeal = document.getElementById("meal");
    this.inputCalories = document.getElementById("calories");
    this.totalCalories = document.getElementById("tot-calories");
    this.clearAllBtn = document.getElementById("clear-all");
  }

  show(mealItems) {
    this.mealItemsUl.innerHTML = "";

    mealItems.forEach((mealItem) => {
      const mealEle = this.document.createElement("LI");
      mealEle.id = mealItem.id;
      mealEle.className = "collection-item";
      mealEle.textContent = `${mealItem.name} : ${mealItem.calories} Calories`;
      const editIcon = this.document.createElement("I");
      editIcon.className = "secondary-content material-icons pointer";
      editIcon.textContent = "edit";
      mealEle.appendChild(editIcon);
      this.mealItemsUl.appendChild(mealEle);
    });

    this.totalCalories.textContent = mealItems.reduce(
      (sum, ele) => sum + ele.calories,
      0
    );
  }

  createMealItem() {
    const mealItem = new MealItem(
      this.inputMeal.value,
      parseInt(this.inputCalories.value)
    );
    return mealItem;
  }

  clearInput() {
    this.inputMeal.value = "";
    this.inputCalories.value = "";
  }

  isInputValid() {
    return (
      this.inputMeal.value &&
      this.inputCalories.value &&
      this.inputCalories.value > 0
    );
  }

  paintInput(mealItem) {
    this.inputMeal.value = mealItem.name;
    this.inputCalories.value = mealItem.calories;
    this.inputCalories.focus();
    this.inputMeal.focus();
  }

  setAddMealState() {
    this.addMealBtn.style.display = "inline";
    this.updateMealBtn.style.display = "none";
    this.deleteMealBtn.style.display = "none";
    this.backBtn.style.display = "none";
  }

  setUpdateMealState() {
    this.addMealBtn.style.display = "none";
    this.updateMealBtn.style.display = "inline";
    this.deleteMealBtn.style.display = "inline";
    this.backBtn.style.display = "inline";
  }
}
