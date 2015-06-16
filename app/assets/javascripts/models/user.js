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

    if (response.birthdate) {
      this.age = this.calculateAge(response.birthdate);
      delete response.birthdate;
    }

    return response;
  },

  calculateAge: function (birthday) {
    var today = new Date();
    var bday = new Date(birthday);
    var age = today.getYear() - bday.getYear();

    if (bday.getMonth() > today.getMonth()) {
      age -= 1
    }

    return age;
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
