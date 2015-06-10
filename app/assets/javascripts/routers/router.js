CuteOrBoot.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "game",
    "users/:id": "showUser",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four"
  },

  game: function () {
    console.log("cute it or boot it");
  },

  showUser: function (id) {
    console.log("id " + id);
  },

  one: function () {
    console.log("one");
  },

  two: function () {
    console.log("two");
  },

  three: function () {
    console.log("three");
  },

  four: function () {
    console.log("four");
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
