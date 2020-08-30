class MealItemCtrl {
  constructor() {
    const mealItemsFromLocalStorage = localStorage.getItem("mealItems");
    this.mealItems = mealItemsFromLocalStorage
      ? JSON.parse(mealItemsFromLocalStorage)
      : new Array();

    this.mealId =
      this.mealItems.reduce(
        (maxId, mealItem) => Math.max(mealItem.id, maxId),
        -1
      ) + 1;
  }

  addMealItem(mealItem) {
    mealItem.setId(this.mealId++);
    this.mealItems.push(mealItem);
    localStorage.setItem("mealItems", JSON.stringify(this.mealItems));
  }

  getMealItem(id) {
    return this.mealItems.find((ele) => ele.id === id);
  }

  deleteMealItem(id) {
    this.mealItems = this.mealItems.filter((ele) => ele.id !== id);
    localStorage.setItem("mealItems", JSON.stringify(this.mealItems));
  }

  getAllMealItems() {
    return this.mealItems;
  }

  clearAllMealItems() {
    this.mealItems = [];
    localStorage.setItem("mealItems", JSON.stringify(this.mealItems));
  }

  updateMealItem(id, updatedMealItem) {
    const mealItem = this.getMealItem(id);
    mealItem.name = updatedMealItem.name;
    mealItem.calories = updatedMealItem.calories;
    localStorage.setItem("mealItems", JSON.stringify(this.mealItems));
  }
}
