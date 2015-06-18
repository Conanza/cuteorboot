CuteOrBoot.Views.Navbar = Backbone.CompositeView.extend({
  template: JST["layout/navbar"],

  id: "sidebar",

  className: "column col-xs-2 sidebar-offcanvas",

  events: {
    "click .logout": "logout",
    "click div.backbone-sidebar.navbar-header": "returnToReel"
  },

  initialize: function (options) {
    this.router = options.router;
    var searchForm = new CuteOrBoot.Views.UserSearch();
    this.addSubview(".users-search", searchForm);

    this.listenTo(this.router, "route", this.markActive);
  },

  returnToReel: function (event) {
    Backbone.history.navigate("#petreel", { trigger: true });
  },

  logout: function (event) {
    $.ajax({
      url: "/session",
      type: "DELETE"
    });
    // success:
    // window.location.href = ("/session/new")
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

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
