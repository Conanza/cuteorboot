CuteOrBoot.Views.UserEdit = Backbone.CompositeView.extend({
  template: JST["users/edit_profile"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "keydown": "keydownHandler",
    "click .close": "remove",
    "click .edit-backdrop": "remove",
    "submit form": "editUser"
  },

  editUser: function (event) {
    event.preventDefault();
    console.log("thanks")
  },

  keydownHandler: function (event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }
});
