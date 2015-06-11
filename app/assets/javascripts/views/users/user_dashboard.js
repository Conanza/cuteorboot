CuteOrBoot.Views.UserDashboard = Backbone.CompositeView.extend({
  template: JST["users/dashboard"],

  initialize: function () {
    this.renderViews();

    // if no specified user
    if (!this.collection.currentUserId) {
      // if collection is unfetched, wait for it
      if (this.collection.length === 0) {
        this.listenTo(this.collection, "sync", this.setCurrentUserId);
      } else {
        this.setCurrentUserId();
      }
    // specified a user
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

  // fetch the first user from collection and trigger
  setCurrentUserId: function (user) {
    this.collection.currentUserId = this.collection.first().id;
    this.collection.trigger("userselected", this.collection.first());
  },

  // fetch the specified user and trigger
  triggerSelected: function () {
    this.collection.trigger("userselected", this.collection.get(this.collection.currentUserId));
  },

  // doesn't work, how do i take care of zombie views
  // removeViews: function (user) {
  //   this.removeModelSubview(".usernav", user);
  //   this.removeModelSubview(".userdetail", user);
  //   this.removeModelSubview(".userlanding", user);
  // },

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
