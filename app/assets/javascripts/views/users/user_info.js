CuteOrBoot.Views.UserInfo = Backbone.CompositeView.extend({
  initialize: function () {
    this.attrs = [
      ["Gender", "gender"],
      ["Animal Type", "animal_type"],
      ["Breed", "breed"],
      ["About Me", "about_me"]
    ];

    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["users/info"],

  render: function () {
    var content = this.template({
      user: this.model,
      attrs: this.attrs
    });

    this.$el.html(content);

    return this;
  }
});
