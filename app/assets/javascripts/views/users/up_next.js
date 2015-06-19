CuteOrBoot.Views.UpNext = Backbone.CompositeView.extend({
  template: JST["users/up_next"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    nextUsers = this.collection.slice(1,5);
    var content = this.template({ users: nextUsers });
    this.$el.html(content);

    return this;
  }
});
