window.CuteOrBoot = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#main");
    var users = new CuteOrBoot.Collections.Users();

    var router = new CuteOrBoot.Routers.Router({
      $rootEl: $rootEl,
      users: users
    });

    var navbar = new CuteOrBoot.Views.Navbar({
      router: router
    });

    $("#navbar").html(navbar.$el);
    navbar.render();

    Backbone.history.start();
  }
};
