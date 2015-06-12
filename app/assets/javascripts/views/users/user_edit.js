CuteOrBoot.Views.UserEdit = Backbone.CompositeView.extend({
  template: JST["users/edit_profile"],

  initialize: function (options) {
    this.hobbies = options.hobbies;
    this.hobbies.fetch();

    this.listenTo(this.hobbies, "sync", this.reRender);
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "keydown": "keydownHandler",
    "click .close": "remove",
    "click .edit-backdrop": "remove",
    "submit form": "editUser"
  },

  reRender: function () {
    setTimeout(function () {
      this.$("input").focus();
    }.bind(this), 0);

    this.render()
  },

  editUser: function (event) {
    event.preventDefault();
    console.log("thanks")
    debugger
  },

  keydownHandler: function (event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  },

  hobbyNames: function () {
    var names = [];
    this.hobbies.each(function (hobby) {
      names.push(hobby.escape("name"));
    }.bind(this));

    return names;
  },

  userHobbyNames: function () {
    var names = [];
    this.model.hobbies().each(function (hobby) {
      names.push(hobby.escape("name"));
    }.bind(this));

    return names;
  },

  render: function () {
    var content = this.template({
      user: this.model,
      userHobbies: this.userHobbyNames(),
      hobbies: this.hobbyNames()
    });

    this.$el.html(content);

    return this;
  }
});
