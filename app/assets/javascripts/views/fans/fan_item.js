CuteOrBoot.Views.FanItem = Backbone.CompositeView.extend({
  template: JST["fans/fan_item"],

  tagName: "li",

  className: "fan-list-item",

  initialize: function () {
    
    setTimeout(function () {
      this.$el.data("user-id", this.model.id);
    }.bind(this), 0);

    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }
});
