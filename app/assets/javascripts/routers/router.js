CuteOrBoot.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = options.users;
  },

  routes: {
    "": "redirectToGame",
    "petreel": "game",
    "fans": "showFans",
    "top-cuties-list": "topCutiesList",
    "cuties/:id": "showUser"
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

    var user = new CuteOrBoot.Models.User({ id: id });
    user.fetch();

    var dashboardView = new CuteOrBoot.Views.UserDashboard({
      model: user,
      collection: this.users
    });

    this._swapView(dashboardView);
  },

  topCutiesList: function () {
    var topCuties = new CuteOrBoot.Collections.Users();

    var topCutiesView = new CuteOrBoot.Views.TopCutiesIndex({
      collection: topCuties
    });

    this._swapView(topCutiesView);
  },

  showFans: function () {
    var fans = new CuteOrBoot.Collections.Users();

    var fansView = new CuteOrBoot.Views.FansIndex({
      collection: fans
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
