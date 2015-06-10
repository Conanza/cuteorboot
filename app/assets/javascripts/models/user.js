CuteOrBoot.Models.User = Backbone.Model.extend({
  urlRoot: "/users",

  parse: function (response) {
    if (response.hobbies) {
      this.hobbies().set(response.hobbies);
      delete response.hobbies;
    }

    return response;
  },

  hobbies: function () {
    if (!this._hobbies) {
      this._hobbies = new CuteOrBoot.Collections.Hobbies([], { user: this });
    }

    return this._hobbies;
  }
});
