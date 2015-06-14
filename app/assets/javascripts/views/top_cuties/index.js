CuteOrBoot.Views.TopCutiesIndex = Backbone.CompositeView.extend({
  template: JST["top_cuties/index"],

  initialize: function () {

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
