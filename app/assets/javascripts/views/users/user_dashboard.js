CuteOrBoot.Views.UserDashboard = Backbone.CompositeView.extend({
  template: JST["users/dashboard"],

  initialize: function () {
    var userNav = new CuteOrBoot.Views.UserNav({ model: this.model });
    var userDetail = new CuteOrBoot.Views.UserDetail({ model: this.model });
    var userLanding = new CuteOrBoot.Views.UserLanding({ model: this.model });
    this.addSubview(".usernav", userNav);
    this.addSubview(".userdetail", userDetail);
    this.addSubview(".userlanding", userLanding);

    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ model: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
