CuteOrBoot.Views.UserDashboard = Backbone.CompositeView.extend({
  template: JST["users/dashboard"],

  initialize: function () {
    if (this.model) {
      this.renderViews();
    } else {
      this.listenTo(this.collection, "sync", this.setNextUser);
    }

    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "remove", this.setNextUser);
    this.listenTo(this.model, "profileToggled", this.toggleProfile);
    this.listenTo(this.model, "editFormOpened", this.openEditForm);
  },

  setNextUser: function (model) {
    this.removeModelSubview(".usernav", model);
    this.removeModelSubview(".userdetail", model);
    this.removeModelSubview(".userlanding", model);
    this.model = this.collection.first();

    this.listenTo(this.model, "editFormOpened", this.openEditForm);
    this.listenTo(this.model, "profileToggled", this.toggleProfile);
    this.renderViews();
  },

  openEditForm: function () {
    var editModal = new CuteOrBoot.Views.UserEdit({
      model: this.model,
      hobbies: new CuteOrBoot.Collections.Hobbies([])
    });

    $("body").prepend(editModal.$el);
    editModal.render();
  },

  toggleProfile: function () {
    this.$("section.userlanding").toggleClass("toggled-off");
    this.$("section.userdetail").toggleClass("toggled-off");
    this.$("a.toggleprofile").toggleClass("toggle");
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
