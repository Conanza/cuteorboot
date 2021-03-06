CuteOrBoot.Views.TopCutiesIndex = Backbone.CompositeView.extend({
  template: JST["top_cuties/index"],

  tagName: "main",

  className: "top-cuties",

  events: {
    "click div.top-cuties-list-item img": "showUser"
  },

  initialize: function () {
    this.collection.fetch({
      data: { top_cuties: true }
    });

    this.listenTo(this.collection, "remove", this.removeCutie);
    this.listenTo(this.collection, "add", this.addTopCutie);
    this.listenTo(this.collection, "sync", this.render);

    this.collection.each(this.addTopCutie.bind(this));
  },

  addTopCutie: function (cutie) {
    var cutieItem = new CuteOrBoot.Views.TopCutie({ model: cutie });

    this.addSubview(".top-cuties-list", cutieItem);
  },

  removeCutie: function (cutie) {
    this.removeModelSubview(".top-cuties-list", cutie);
  },

  showUser: function (event) {
    event.preventDefault();
    var userId = $(event.currentTarget).attr("cutie-id");

    Backbone.history.navigate("cuties/" + userId, { trigger: true });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});
