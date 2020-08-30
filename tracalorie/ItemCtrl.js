class MealItemCtrl {
  constructor() {
    this.mealItems = [];
    this.mealId = 0;
  }

  addMealItem(mealItem) {
    mealItem.setId(this.mealId++);
    this.mealItems.push(mealItem);
  }

  getMealItem(id) {
    return this.mealItems.find((ele) => ele.id === id);
  }

  deleteMealItem(id) {
    this.mealItems = this.mealItems.filter((ele) => ele.id !== id);
  }

  getAllMealItems() {
    return this.mealItems;
  }

  clearAllMealItems() {
    this.mealItems = [];
  }
}
