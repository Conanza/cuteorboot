CuteOrBoot.Views.UserNav = Backbone.CompositeView.extend({
  template: JST["users/nav"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .cuteit": "cuteVote",
    "click .bootit": "bootVote",
    "click .add-image": "addImage",
    "click a.toggleprofile": "toggleProfile",
    "click a.editprofile": "openEditForm",
    "keydown": "handleKeydown"
  },

  handleKeydown: function (event) {
    // 1 => keycode 49
    // 2 => keycode 50
  },

  openEditForm: function (event) {
    event.preventDefault();
    this.model.trigger("editFormOpened");
  },

  toggleProfile: function (event) {
    event.preventDefault();
    this.model.trigger("profileToggled");
  },

  // fix success callback
  cuteVote: function (event) {
    event.preventDefault();

    var vote = new CuteOrBoot.Models.Vote({
      votee_id: this.model.id,
      value: 1
    });

    vote.save({}, {
      success: function (model, response) {
        this.collection.remove(this.model);

        if (this.collection.length < 6) {
          Backbone.history.navigate("", { trigger: true });
        } else {
          Backbone.history.navigate("petreel", { trigger: true });
        }
      }.bind(this),

      error: function (model, response) {
        console.log("didnt work")
      }
    });
  },

  // while voting in pet reel, profile remains toggled ?
  bootVote: function (event) {
    event.preventDefault();

    var vote = new CuteOrBoot.Models.Vote({
      votee_id: this.model.id,
      value: 0,
    });

    vote.save({}, {
      success: function () {
        this.collection.remove(this.model);

        if (this.collection.length < 6) {
          Backbone.history.navigate("", { trigger: true });
        } else {
          Backbone.history.navigate("petreel", { trigger: true });
        }
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
