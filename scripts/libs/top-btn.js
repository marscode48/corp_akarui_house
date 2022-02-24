class TopBtn {
  constructor(y) {
    this.y = y;
    this.DOM = {};
    this.DOM.pageTop = document.querySelector('#to-top');
    this._getPageScroll();
  }

  _add() {
    this.DOM.pageTop.classList.add('inview');
    this.DOM.pageTop.addEventListener('click', this._ScrollTo.bind(this));
  }

  _remove() {
    this.DOM.pageTop.classList.remove('inview');
  }

  _getPageScroll() {
    window.addEventListener('scroll', function() {
      const pageScroll = window.pageYOffset;
      console.log(pageScroll)
      pageScroll > this.y ? this._add() : this._remove();
    }.bind(this));
  }

  _ScrollTo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}