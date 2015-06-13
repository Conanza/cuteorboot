CuteOrBoot.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = options.users;
  },

  routes: {
    "": "redirectToGame",
    "petreel": "game",
    "fans": "showFans",
    "cuties/:id": "showUser",
    // "2": "two",
    // "3": "three",
    // "4": "four"
  },

  redirectToGame: function () {
    Backbone.history.navigate('petreel', { trigger: true });
  },

  game: function () {
    if (this.users.length < 6) {
      this.users.fetch();
    }

    var user = this.users.first();

    var dashboardView = new CuteOrBoot.Views.UserDashboard({
      model: user,
      collection: this.users
    });

    this._swapView(dashboardView);
  },

  showUser: function (id) {
    if (this.users.length < 6) {
      this.users.fetch();
    }

    var user = this.users.getOrFetch(id);

    var dashboardView = new CuteOrBoot.Views.UserDashboard({
      model: user,
      collection: this.users
    });

    this._swapView(dashboardView);
  },

  showFans: function () {
    if (this.users.length === 0) {
      this.users.fetch();
    }

    var user = this.users.getOrFetch(CURRENT_USER_ID);

    var fansView = new CuteOrBoot.Views.FansIndex({
      model: user
    });

    this._swapView(fansView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
