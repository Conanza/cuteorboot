CuteOrBoot.Views.UserSearch = Backbone.CompositeView.extend({
  template: JST["users/search"],

  className: "search-form",

  tagName: "main",

  initialize: function () {
  },
  //
  // reRender: function () {
  //   setTimeout(function () {
  //     this.$("input#city").focus();
  //     this.$(".edit-backdrop").removeClass("toggled-off");
  //     this.$(".edit-content").removeClass("toggled-off");
  //
  //   }.bind(this), 0);
  //
  //   this.render();
  // },

  onRender: function () {
    setTimeout(function () {
      this.$el.usersSearch();
      Backbone.CompositeView.prototype.onRender.call(this);
    }.bind(this), 0);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.onRender();

    return this;
  },
});
