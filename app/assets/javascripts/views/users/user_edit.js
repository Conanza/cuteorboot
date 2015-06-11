CuteOrBoot.Views.UserEdit = Backbone.CompositeView.extend({
  template: JST["users/edit_profile"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ user: model });
    this.$el.html(content);

    return this;
  }
});
