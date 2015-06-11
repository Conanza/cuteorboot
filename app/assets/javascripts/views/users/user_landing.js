CuteOrBoot.Views.UserLanding = Backbone.CompositeView.extend({
  template: JST["users/landing"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "userselected", this.swapModel);
  },

  swapModel: function (newUser) {
    this.model = newUser;
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  render: function () {
    if (!this.model) {
      return this;
    }

    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }
});
