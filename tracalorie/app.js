let mealItemId;

// Instantiate class
const uiCtrl = new UICtrl(document);
const mealItemCtrl = new MealItemCtrl();

uiCtrl.setAddMealState();

// event listener
document.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

uiCtrl.addMealBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!uiCtrl.isInputValid()) {
    return;
  }

  const mealItem = uiCtrl.createMealItem();
  mealItemCtrl.addMealItem(mealItem);
  uiCtrl.show(mealItemCtrl.getAllMealItems());
  uiCtrl.clearInput();
});

uiCtrl.ulElement.addEventListener("click", (e) => {
  if (!e.target.classList.contains("pointer")) {
    return;
  }

  mealItemId = parseInt(e.target.parentNode.id);
  const mealItem = mealItemCtrl.getMealItem(mealItemId);
  uiCtrl.setUpdateMealState();
  uiCtrl.paintInput(mealItem);
});

uiCtrl.updateMealBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const mealItem = mealItemCtrl.getMealItem(mealItemId);
  uiCtrl.updateMealItem(mealItem);
  uiCtrl.show(mealItemCtrl.getAllMealItems());
  uiCtrl.clearInput();
  uiCtrl.setAddMealState();
});

uiCtrl.deleteMealBtn.addEventListener("click", (e) => {
  e.preventDefault();

  mealItemCtrl.deleteMealItem(mealItemId);
  uiCtrl.show(mealItemCtrl.getAllMealItems());
  uiCtrl.clearInput();
  uiCtrl.setAddMealState();
});

uiCtrl.backBtn.addEventListener("click", (e) => {
  e.preventDefault();

  uiCtrl.clearInput();
  uiCtrl.setAddMealState();
});

uiCtrl.clearAllBtn.addEventListener("click", (e) => {
  e.preventDefault();

  mealItemCtrl.clearAllMealItems();
  uiCtrl.show(mealItemCtrl.getAllMealItems());
});
