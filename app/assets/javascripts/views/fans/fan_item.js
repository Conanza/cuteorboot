CuteOrBoot.Views.FanItem = Backbone.CompositeView.extend({
  template: JST["fans/fan_item"],

  className: "fan-list-item col-xs-3",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.$("img").attr("fan-id", this.model.id);

    return this;
  }
});
