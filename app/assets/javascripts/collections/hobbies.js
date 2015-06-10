CuteOrBoot.Collections.Hobbies = Backbone.Collection.extend({
  url: "/api/hobbies",

  model: CuteOrBoot.Models.Hobby,

  initialize: function (options) {
    this.user = options.user;
  }
});
