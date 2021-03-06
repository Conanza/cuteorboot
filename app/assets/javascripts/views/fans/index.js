CuteOrBoot.Views.FansIndex = Backbone.CompositeView.extend({
  template: JST["fans/index"],

  tagName: "main",

  className: "fans",

  events: {
    "click div.fan-list-item img": "showUser"
  },

  initialize: function () {
    this.collection.fetch({
      data: { fans: true }
    });

    this.listenTo(this.collection, "remove", this.removeFan);
    this.listenTo(this.collection, "add", this.addFan);
    this.listenTo(this.collection, "sync", this.render);

    this.collection.each(this.addFan.bind(this));
  },

  addFan: function (fan) {
    var fanItem = new CuteOrBoot.Views.FanItem({ model: fan });
    fanItem.$el.attr("fan-id", fan.id);

    this.addSubview(".fan-list", fanItem);
  },

  removeFan: function (fan) {
    this.removeModelSubview(".fan-list", fan);
  },

  showUser: function (event) {
    event.preventDefault();
    var userId = $(event.currentTarget).attr("fan-id");

    Backbone.history.navigate("cuties/" + userId, { trigger: true });
  },

  render: function () {
    var content = this.template({
      user: this.model,
      total: this.collection.length
    });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});
