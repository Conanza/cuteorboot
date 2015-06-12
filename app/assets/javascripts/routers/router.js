CuteOrBoot.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = options.users;
  },

  routes: {
    "": "redirectToGame",
    "petreel": "game",
    "cuties/:id": "showUser",
    // "2": "two",
    // "3": "three",
    // "4": "four"
  },

  redirectToGame: function () {
    Backbone.history.navigate('petreel', { trigger: true });
  },

  game: function () {
    // if this.users.length < 5, then fetch?
    this.users.fetch();

    var user = this.users.first();

    var dashboardView = new CuteOrBoot.Views.UserDashboard({
      model: user,
      collection: this.users
    });

    this._swapView(dashboardView);
  },

  showUser: function (id) {
    this.users.fetch();

    var user = new CuteOrBoot.Models.User({ id: id });
    user.fetch();

    var dashboardView = new CuteOrBoot.Views.UserDashboard({
      model: user,
      collection: this.users
    });

    this._swapView(dashboardView);
  },

  // two: function () {
  //   console.log("two");
  // },
  //
  // three: function () {
  //   console.log("three");
  // },
  //
  // four: function () {
  //   console.log("four");
  // },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
