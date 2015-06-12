CuteOrBoot.Views.UserLanding = Backbone.CompositeView.extend({
  template: JST["users/landing"],

  initialize: function () {
    this.addLandingSubviews();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "remove", this.removeLandingSubviews);
    // this.listenTo(this.model, "profileToggled", this.toggleProfile);
  },

  // toggleProfile: function () {
  //   debugger
  // },

  removeLandingSubviews: function (model) {
    this.removeModelSubview(".landing-carousel", model);
  },

  addLandingSubviews: function () {
    var largeCarousel = new CuteOrBoot.Views.LargeCarousel({
      model: this.model,
      collection: this.model.pictures()
    });

    this.addSubview(".landing-carousel", largeCarousel);
  },

  render: function () {
    if (!this.model) {
      return this;
    }

    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
