CuteOrBoot.Views.UserLanding = Backbone.CompositeView.extend({
  template: JST["users/landing"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }
});
