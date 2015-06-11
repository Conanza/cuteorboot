CuteOrBoot.Views.UserDashboard = Backbone.CompositeView.extend({
  template: JST["users/dashboard"],

  initialize: function () {
    this.renderViews();

    if (!this.collection.currentUserId) {
      if (this.collection.length === 0) {
        this.listenTo(this.collection, "sync", this.setCurrentUserId);
      } else {
        this.setCurrentUserId();
      }
    } else {
      if (this.collection.length === 0) {
        this.listenTo(this.collection, "sync", this.triggerSelected);
      } else {
        this.triggerSelected();
      }
    }

    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "remove", this.setCurrentUserId);
  },

  triggerSelected: function () {
    this.collection.trigger("userselected", this.collection.get(this.collection.currentUserId));
  },

  setCurrentUserId: function () {
    this.collection.currentUserId = this.collection.first().id;
    this.collection.trigger("userselected", this.collection.first());
  },

  renderViews: function () {
    var userNav = new CuteOrBoot.Views.UserNav({
      collection: this.collection
    });
    var userDetail = new CuteOrBoot.Views.UserDetail({
      collection: this.collection
    });
    var userLanding = new CuteOrBoot.Views.UserLanding({
      collection: this.collection
    });

    this.addSubview(".usernav", userNav);
    this.addSubview(".userdetail", userDetail);
    this.addSubview(".userlanding", userLanding);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
