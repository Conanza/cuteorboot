CuteOrBoot.Views.UserDetail = Backbone.CompositeView.extend({
  template: JST["users/detail"],

  initialize: function () {
    this.addDetailSubviews();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "remove", this.removeDetailSubviews);
    // this.listenTo(this.model, "profileToggled", this.toggleProfile);
  },

  // toggleProfile: function () {
  //
  // },

  removeDetailSubviews: function (model) {
    this.removeModelSubview(".detail-carousel", model);
  },

  addDetailSubviews: function () {
    var smallCarousel = new CuteOrBoot.Views.SmallCarousel({
      model: this.model,
      collection: this.model.pictures()
    });

    this.addSubview(".detail-carousel", smallCarousel);
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
