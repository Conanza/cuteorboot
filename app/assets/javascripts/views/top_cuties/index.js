CuteOrBoot.Views.TopCutiesIndex = Backbone.CompositeView.extend({
  template: JST["top_cuties/index"],

  initialize: function () {
    this.collection.fetch({
      data: { top_cuties: true }
    });

    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
