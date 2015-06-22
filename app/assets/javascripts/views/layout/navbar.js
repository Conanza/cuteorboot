CuteOrBoot.Views.Navbar = Backbone.CompositeView.extend({
  template: JST["layout/navbar"],

  id: "sidebar",

  className: "column col-xs-2 sidebar-offcanvas",

  events: {
    "click .tour": "showTour",
    "click .logout": "logout",
    "click div.backbone-sidebar.navbar-header": "returnToReel"
  },

  initialize: function (options) {
    this.router = options.router;
    var searchForm = new CuteOrBoot.Views.UserSearch();
    this.addSubview(".users-search", searchForm);

    this.listenTo(this.router, "route:handleGameOver", this.handleGameOver);
    this.listenTo(this.router, "route", this.markActive);
  },

  showTour: function (event) {
    event.preventDefault();

    CuteOrBootTour.initialize();
  },

  handleGameOver: function () {
    $("#gameover").modal('show');

    setTimeout(function () {
      Backbone.history.navigate("cuties/" + CURRENT_USER_ID, { trigger: true });
    });
  },

  returnToReel: function (event) {
    event.preventDefault();

    Backbone.history.navigate("#petreel", { trigger: true });
  },

  logout: function (event) {
    event.preventDefault();

    $.ajax({
      url: "/session",
      type: "DELETE",
      success: function () {
        window.location.href = "/session/new";
      }
    });
  },

  onRender: function () {
    setTimeout(function () {
      $('[data-toggle="tooltip"]').tooltip();
      Backbone.CompositeView.prototype.onRender.call(this);
    }.bind(this), 0);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    this.onRender();

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
