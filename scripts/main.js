/*=================================================
JavaScript
===================================================*/
document.addEventListener("DOMContentLoaded", function () {
  const main = new Main();
});

class Main {
  constructor() {
    this._init();
  }

  _init() {
    new MobileMenu();
    new TopBtn(700);
  }
}
