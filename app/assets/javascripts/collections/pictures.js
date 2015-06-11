CuteOrBoot.Collections.Pictures = Backbone.Collection.extend({
  url: "/api/pictures",

  model: CuteOrBoot.Models.Picture,

  initialize: function (options) {
    this.user = options.user;
  },

  getOrFetch: function (id) {
    var picture = this.get(id);

    if (picture) {
      picture.fetch();
    } else {
      picture = new CuteOrBoot.Models.Picture({ id: id });
      picture.fetch({
        success: function () {
          this.add(picture);
        }.bind(this)
      });
    }

    return picture;
  }
});
