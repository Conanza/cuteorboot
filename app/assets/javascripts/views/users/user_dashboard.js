CuteOrBoot.Views.UserDashboard = Backbone.CompositeView.extend({
  template: JST["users/dashboard"],

  initialize: function () {
    if (this.model) {
      this.renderViews();
    } else {
      this.listenTo(this.collection, "sync", this.addModel);
    }

    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "remove", this.addModel);
  },

  addModel: function (model) {
    this.removeModelSubview(".usernav", model);
    this.removeModelSubview(".userdetail", model);
    this.removeModelSubview(".userlanding", model);
    this.model = this.collection.first();
    this.renderViews();
  },

  renderViews: function () {
    var userNav = new CuteOrBoot.Views.UserNav({
      model: this.model,
      collection: this.collection
    });
    var userDetail = new CuteOrBoot.Views.UserDetail({
      model: this.model,
      collection: this.collection
    });
    var userLanding = new CuteOrBoot.Views.UserLanding({
      model: this.model,
      collection: this.collection
    });

    this.addSubview(".usernav", userNav);
    this.addSubview(".userlanding", userLanding);
    this.addSubview(".userdetail", userDetail);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
