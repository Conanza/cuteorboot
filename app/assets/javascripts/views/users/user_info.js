CuteOrBoot.Views.UserInfo = Backbone.CompositeView.extend({
  template: JST["users/info"],

  initialize: function () {
    this.attrs = [
      ["Gender", "gender"],
      ["Animal Type", "animal_type"],
      ["Breed", "breed"]
    ];

    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      user: this.model,
      attrs: this.attrs,
      ratingClass: this.ratingClass()
    });

    this.$el.html(content);

    return this;
  },

  ratingClass: function () {
    var rating = this.model.escape("rating");

    var ratingClass;
    if (rating > 9) {
      ratingClass = "sizzling";
    } else if (rating > 7) {
      ratingClass = "hot";
    } else if (rating > 6) {
      ratingClass = "warm";
    } else if (rating >= 5){
      ratingClass = "lukewarm";
    } else {
      ratingClass = "cold";
    }

    return ratingClass;
  }
});
