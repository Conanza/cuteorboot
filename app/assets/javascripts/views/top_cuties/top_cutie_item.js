CuteOrBoot.Views.TopCutie = Backbone.CompositeView.extend({
  template: JST["top_cuties/cutie_item"],

  tagName: "li",

  className: "top-cuties-list-item",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }
});
