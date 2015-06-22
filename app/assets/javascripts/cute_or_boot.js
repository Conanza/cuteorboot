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

    $("div.cuteorboot").prepend(navbar.$el);
    navbar.render();

    setTimeout(function () {
      $('.alert').fadeOut();
    }, 3000);

    Backbone.history.start();

    CuteOrBootTour.initialize();
  }
};
