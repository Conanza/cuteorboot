CuteOrBoot.Views.UserNav = Backbone.CompositeView.extend({
  template: JST["users/nav"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .cuteit": "cuteVote",
    "click .bootit": "bootVote",
    "click .add-image": "addImage",
    "click a.toggleprofile": "toggleProfile"
  },

  toggleProfile: function () {
    console.log("toggling user " + this.model.id)
  },

  // fix success callback
  cuteVote: function (event) {
    event.preventDefault();
    console.log("cuted");

    var vote = new CuteOrBoot.Models.Vote({
      votee_id: this.model.id,
      value: 1
    });

    vote.save({}, {
      success: function (model, response) {
        console.log("worked")
        this.collection.remove(this.model);
        Backbone.history.navigate("", { trigger: true });
      }.bind(this),

      error: function (model, response) {
        console.log("didnt work")
      }
    });
  },

  // fix success callback
  bootVote: function (event) {
    event.preventDefault();
    console.log("booted");

    var vote = new CuteOrBoot.Models.Vote({
      votee_id: this.model.id,
      value: 0,
    });

    vote.save({}, {
      success: function () {
        console.log("worked")
        this.collection.remove(this.model);
        Backbone.history.navigate("", { trigger: true });
      }.bind(this),

      error: function () {
        console.log("didnt work")
      }
    });
  },

  addImage: function (event) {
    event.preventDefault();
    var user = this.model;

    cloudinary.openUploadWidget(CLOUDINARY_SETTINGS, function (error, results) {
      if (error) {
      } else {
        results.forEach(function (pic) {
          var data = {
            thumb_url: pic.thumbnail_url,
            image_url: pic.secure_url
          };

          var picture = new CuteOrBoot.Models.Picture(data);
          user;

          picture.save({}, {
            success: function (model, response) {
              user.pictures().add(model);
            },
            error: function (model, response) {
            }
          });
        });
      }
    });
  },

  render: function () {
    if (!this.model) {
      return this;
    }

    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }
});
