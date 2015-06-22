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
    "click .close": "removeEdit",
    "click .edit-backdrop": "removeEdit",
    "submit form": "editUser"
  },

  reRender: function () {
    setTimeout(function () {
      this.$("input#city").focus();
      this.$(".edit-backdrop").removeClass("toggled-off");
      this.$(".edit-content").removeClass("toggled-off");

    }.bind(this), 0);

    this.render();
  },

  removeEdit: function (event) {
    event.preventDefault();

    this.$(".edit-backdrop").addClass("toggled-off");
    this.$(".edit-content").addClass("toggled-off");

    setTimeout(function () {
      this.remove();
    }.bind(this), 501);
  },

  editUser: function (event) {
    event.preventDefault();
    var data = $(event.currentTarget).serializeJSON();

    this.model.save(data, {
      success: function (model, response) {
        this.model.fetch();
        this.remove();
      }.bind(this)
    });
  },

  keydownHandler: function (event) {
    event.preventDefault();
    
    if (event.keyCode === 27) {
      this.removeEdit();
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
