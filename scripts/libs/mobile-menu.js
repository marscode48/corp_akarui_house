class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.header = document.querySelector(".header");
    this.DOM.hamburger = document.querySelector(".hamburger");
    this.DOM.mask = document.querySelector("#mask");
    this.DOM.navs = document.querySelectorAll("#navi a");
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.header.classList.toggle("open");
  }

  _addEvent() {
    this.DOM.hamburger.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.mask.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.navs.forEach((nav) => {
      nav.addEventListener(this.eventType, this._toggle.bind(this));
    });
  }
}