CuteOrBoot.Views.FansIndex = Backbone.CompositeView.extend({
  template: JST["fans/index"],

  initialize: function () {
    this.collection = this.model.fans();

    this.listenTo(this.collection, "remove", this.removeFan);
    this.listenTo(this.collection, "add", this.addFan);
    this.listenTo(this.model, "sync", this.render);

    this.collection.each(this.addFan.bind(this));
  },

  addFan: function (fan) {
    var fanItem = new CuteOrBoot.Views.FanItem({ model: fan });

    this.addSubview(".fans", fanItem);
  },

  removeFan: function (fan) {
    this.removeModelSubview(".fans", fan);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});
