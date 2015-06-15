CuteOrBoot.Views.TopCutie = Backbone.CompositeView.extend({
  template: JST["top_cuties/cutie_item"],

  className: "top-cuties-list-item col-xs-3",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      user: this.model,
      ratingClass: this.ratingClass()
    });
    this.$el.html(content);
    this.$("img").attr("cutie-id", this.model.id);

    return this;
  },

  ratingClass: function () {
    var rating = this.model.escape("rating");

    var ratingClass;
    if (rating > 9) {
      ratingClass = "rating-sizzling";
    } else if (rating > 7) {
      ratingClass = "rating-hot";
    } else if (rating > 6) {
      ratingClass = "rating-warm";
    } else if (rating >= 5){
      ratingClass = "rating-lukewarm";
    } else {
      ratingClass = "rating-cold";
    }

    return ratingClass;
  }
});
