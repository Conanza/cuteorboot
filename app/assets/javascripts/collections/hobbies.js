CuteOrBoot.Collections.Hobbies = Backbone.Collection.extend({
  url: "/api/hobbies",

  model: CuteOrBoot.Models.Hobby,

  initialize: function (options) {
    if (options.user) {
      this.user = options.user;
    }
  }
});
