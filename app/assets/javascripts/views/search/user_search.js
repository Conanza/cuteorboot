CuteOrBoot.Views.UserSearch = Backbone.CompositeView.extend({
  template: JST["search/search_form"],

  className: "search-form",

  tagName: "main",

  events: {
    "click img": "showUser",
    "click li.username-search": "usernameSearch",
    "click li.state-search": "stateSearch"
  },

  initialize: function () {
  },

  usernameSearch: function () {
    this.render({ form: "username" });
  },

  stateSearch: function () {
    this.render({ form: "state" });
  },

  onRender: function (options) {
    setTimeout(function () {
      this.$el.usersSearch();
      Backbone.CompositeView.prototype.onRender.call(this);
    }.bind(this), 0);
  },

  render: function (options) {
    var content;
    if (!!options) {
      content = this.template({ formName: options.form });
      this.$el.html(content);
      this.onRender({ form: options.form });
    } else {
      content = this.template({ formName: "username" });
      this.$el.html(content);
      this.onRender({ form: "username" });
    }

    return this;
  },

  showUser: function (event) {
    event.preventDefault();
    var userId = $(event.currentTarget).attr("user-id");

    Backbone.history.navigate("cuties/" + userId, { trigger: true });
  }
});
