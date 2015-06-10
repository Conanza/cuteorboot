CuteOrBoot.Views.Navbar = Backbone.CompositeView.extend({
  template: JST["layout/navbar"],

  events: {
    "mouseover ul.nav li": "hoverOn",
    "mouseout ul.nav li": "hoverOff"
  },

  initialize: function (options) {
    this.router = options.router;

    this.listenTo(this.router, "route", this.markActive);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  hoverOn: function (event) {
    $(event.currentTarget).addClass("hover");
  },

  hoverOff: function (event) {
    $(event.currentTarget).removeClass("hover");
  },

  markActive: function (route) {
    this.$(".active").removeClass("active");
    this.$("." + route).addClass("active");
  }
});
