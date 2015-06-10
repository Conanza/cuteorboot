window.CuteOrBoot = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#main");
    var router = new CuteOrBoot.Routers.Router({
      $rootEl: $rootEl
    });
    var navbar = new CuteOrBoot.Views.Navbar({
      router: router
    });
    
    $("#navbar").html(navbar.render().$el);

    Backbone.history.start();
  }
};
