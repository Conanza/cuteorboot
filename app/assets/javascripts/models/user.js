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
  }
});
