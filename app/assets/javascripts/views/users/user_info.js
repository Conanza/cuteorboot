CuteOrBoot.Views.UserInfo = Backbone.CompositeView.extend({
  template: JST["users/info"],

  initialize: function () {
    this.attrs = [
      ["Gender", "gender"],
      ["Animal Type", "animal_type"],
      ["Breed", "breed"],
      ["About Me", "about_me"]
    ];

    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      user: this.model,
      attrs: this.attrs
    });

    this.$el.html(content);

    return this;
  }
});
