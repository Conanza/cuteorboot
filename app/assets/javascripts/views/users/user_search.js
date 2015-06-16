CuteOrBoot.Views.UserSearch = Backbone.CompositeView.extend({
  template: JST["users/search"],

  className: "search-form",

  tagName: "main",

  initialize: function () {
  },

  onRender: function () {
    setTimeout(function () {
      this.$el.usersSearch();
      Backbone.CompositeView.prototype.onRender.call(this);
    }.bind(this), 0);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.onRender();

    return this;
  },
});
