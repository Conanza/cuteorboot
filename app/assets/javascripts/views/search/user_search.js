CuteOrBoot.Views.UserSearch = Backbone.CompositeView.extend({
  template: JST["search/search_form"],

  className: "search-form",

  tagName: "main",

  events: {
    "click img": "showUser"
  },

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

  showUser: function (event) {
    event.preventDefault();
    var userId = $(event.currentTarget).attr("user-id");

    Backbone.history.navigate("cuties/" + userId, { trigger: true });
  }
});
