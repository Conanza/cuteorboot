CuteOrBoot.Views.FansIndex = Backbone.CompositeView.extend({
  template: JST["fans/index"],

  tagName: "main",

  className: "fans",

  events: {
    "click li": "showUser"
  },

  initialize: function () {
    this.collection = this.model.fans();

    this.listenTo(this.collection, "remove", this.removeFan);
    this.listenTo(this.collection, "add", this.addFan);
    this.listenTo(this.model, "sync", this.render);

    this.collection.each(this.addFan.bind(this));
  },

  addFan: function (fan) {
    var fanItem = new CuteOrBoot.Views.FanItem({ model: fan });

    this.addSubview(".fan-list", fanItem);
  },

  removeFan: function (fan) {
    this.removeModelSubview(".fan-list", fan);
  },

  showUser: function (event) {
    event.preventDefault();
    var userId = $(event.currentTarget).data("user-id");

    Backbone.history.navigate("cuties/" + userId, { trigger: true });
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});
