class ItemCtrl {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getItem(id) {
    if (this.items) {
      this.items.filter((ele) => ele.id === id);
    }
  }
}
