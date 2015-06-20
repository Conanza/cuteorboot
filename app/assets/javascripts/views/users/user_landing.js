CuteOrBoot.Views.UserLanding = Backbone.CompositeView.extend({
  template: JST["users/landing"],

  initialize: function () {
    this.addLandingSubviews();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "remove", this.removeLandingSubviews);
  },

  removeLandingSubviews: function (model) {
    this.removeModelSubview(".landing-carousel", model);

    if (window.location.hash === "#petreel") {
      var user = this.collection.first();

      this.removeModelSubview(".user-preview", user);
    }
  },

  addLandingSubviews: function () {
    if (!this.model) {
      return;
    }
    
    var largeCarousel = new CuteOrBoot.Views.LargeCarousel({
      model: this.model,
      collection: this.model.pictures()
    });

    if (window.location.hash === "#petreel") {
      var userPreview = new CuteOrBoot.Views.UpNext({
        collection: this.collection
      });

      this.addSubview(".user-preview", userPreview);
    }

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
