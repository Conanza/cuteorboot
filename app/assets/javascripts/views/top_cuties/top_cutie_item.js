CuteOrBoot.Views.TopCutie = Backbone.CompositeView.extend({
  template: JST["top_cuties/cutie_item"],

  className: "top-cuties-list-item col-xs-3",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.$("img").attr("cutie-id", this.model.id);

    return this;
  }
});
