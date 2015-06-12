CuteOrBoot.Views.UserDetail = Backbone.CompositeView.extend({
  template: JST["users/detail"],

  initialize: function () {
    this.addDetailSubviews();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "remove", this.removeDetailSubviews);
  },

  removeDetailSubviews: function (model) {
    this.removeModelSubview(".detail-carousel", model);
    this.removeModelSubview(".detail-info", model);
  },

  addDetailSubviews: function () {
    var smallCarousel = new CuteOrBoot.Views.SmallCarousel({
      model: this.model,
      collection: this.model.pictures()
    });

    var userInfo = new CuteOrBoot.Views.UserInfo({
      model: this.model
    });

    this.addSubview(".detail-info", userInfo);
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
