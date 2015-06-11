$.Carousel = function (el) {
  this.$el = $(el);
  this.$items = this.$el.find(".items").children();
  this.activeIdx = 0;
  this.transitioning = false;

  this.$items.eq(0).addClass("active");

  this.$el.on("click", "a.slide-left", this.slideLeft.bind(this));
  this.$el.on("click", "a.slide-right", this.slideRight.bind(this));
};

$.Carousel.prototype.slide = function (dir) {
  if (this.transitioning) {
    return;
  }
  this.transitioning = true;

  var $oldItem = this.$items.eq(this.activeIdx);
  this.activeIdx =
    (this.activeIdx + dir + this.$items.length) % this.$items.length;
  var $newItem = this.$items.eq(this.activeIdx);

  var newSide, oldSide;
  if (dir == 1) {
    newSide = "right";
    oldSide = "left";
  } else {
    newSide = "left";
    oldSide = "right";
  }

  $newItem.addClass("active " + newSide);
  $oldItem.one("transitionend", (function () {
    $oldItem.removeClass("active " + oldSide);
    this.transitioning = false;
  }).bind(this));

  setTimeout((function () {
    $oldItem.addClass(oldSide);
    $newItem.removeClass(newSide);
  }).bind(this), 0);
};

$.Carousel.prototype.slideLeft = function () { this.slide(1); };
$.Carousel.prototype.slideRight = function () { this.slide(-1); };

$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};
