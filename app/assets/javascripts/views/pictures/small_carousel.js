CuteOrBoot.Views.SmallCarousel = Backbone.CompositeView.extend({
  template: JST["pictures/small_carousel"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "sync", this.render);
  },

  onRender: function () {
    setTimeout(function () { // TA: use pattern as it's ontended
      this.$("div.carousel-sm").carousel();
      Backbone.CompositeView.prototype.onRender.call(this);
    }.bind(this), 0);
  },

  render: function () {
    if (!this.model) {
      return this;
    }

    var content = this.template({ pictures: this.collection });

    this.$el.html(content);
    this.attachSubviews();
    this.onRender();

    return this;
  }
});
