CuteOrBoot.Collections.Users = Backbone.Collection.extend({
  url: "/users",

  model: CuteOrBoot.Models.User,

  getOrFetch: function (id) {
    var user = this.get(id);

    if (user) {
      user.fetch();
    } else {
      user = new CuteOrBoot.Models.User({ id: id });
      user.fetch({
        success: function () {
          this.add(user);
        }.bind(this)
      });
    }

    return user;
  }
});
