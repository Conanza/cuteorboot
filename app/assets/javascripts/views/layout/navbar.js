CuteOrBoot.Views.Navbar = Backbone.CompositeView.extend({
  template: JST["layout/navbar"],

  id: "sidebar",

  className: "column col-xs-2 sidebar-offcanvas",

  events: {
    "mouseover .row": "toggleSidebar",
    "mouseout .row": "toggleSidebar",
    "click .logout": "logout"
  },

  initialize: function (options) {
    this.router = options.router;

    this.listenTo(this.router, "route", this.markActive);
  },

  logout: function (event) {
    $.ajax({
      url: "/session",
      type: "DELETE"
    });
  },

  toggleSidebar: function (event) {
    if (window.innerWidth > 768) {
      return;
    }

    $(this).toggleClass('visible-xs text-center');
    $('.row-offcanvas').toggleClass('active');
    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
    $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  markActive: function (route, params) {
    if (route === "showUser" && params[0] !== CURRENT_USER_ID) {
      this.$(".active").removeClass("active");
      return;
    }

    this.$(".active").removeClass("active");
    this.$("." + route).addClass("active");
  }
});
