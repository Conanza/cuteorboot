CuteOrBoot.Models.User = Backbone.Model.extend({
  urlRoot: "/users",

  parse: function (response) {
    if (response.hobbies) {
      this.hobbies().set(response.hobbies);
      delete response.hobbies;
    }

    if (response.pictures) {
      this.pictures().set(response.pictures);
      delete response.pictures;
    }

    if (response.fans) {
      this.fans().set(response.fans);
      delete response.fans;
    }

    return response;
  },

  pictures: function () {
    if (!this._pictures) {
      this._pictures = new CuteOrBoot.Collections.Pictures([], { user: this });
    }

    return this._pictures;
  },

  hobbies: function () {
    if (!this._hobbies) {
      this._hobbies = new CuteOrBoot.Collections.Hobbies([], { user: this });
    }

    return this._hobbies;
  },

  fans: function () {
    if (!this._fans) {
      this._fans = new CuteOrBoot.Collections.Users([], { user: this });
    }

    return this._fans;
  }
});
