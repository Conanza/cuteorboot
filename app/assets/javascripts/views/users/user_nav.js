CuteOrBoot.Views.UserNav = Backbone.CompositeView.extend({
  template: JST["users/nav"],

  render: function () {
    var content = this.template({ user: this.model });
    
  }
});
