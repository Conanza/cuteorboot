CuteOrBoot.Views.UserSearch = Backbone.CompositeView.extend({
  template: JST["users/search"],

  initialize: function () {

  }

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
