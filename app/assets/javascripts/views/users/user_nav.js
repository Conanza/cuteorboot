CuteOrBoot.Views.UserNav = Backbone.CompositeView.extend({
  template: JST["users/nav"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .cuteit": "cuteVote",
    "click .bootit": "bootVote"
  },

  cuteVote: function (event) {
    event.preventDefault();
    console.log("cuted");

    this.collection.remove(this.model);
    Backbone.history.navigate("", { trigger: true });

    var vote = new CuteOrBoot.Models.Vote({
      votee_id: this.model.id,
      value: 1
    });

    vote.save({}, {
      success: function (model, response) {
        console.log("worked")
      },

      error: function (model, response) {
        debugger

        console.log("didnt work")
      }
    });
  },

  bootVote: function (event) {
    event.preventDefault();
    console.log("booted");

    this.collection.remove(this.model);
    Backbone.history.navigate("", { trigger: true });

    var vote = new CuteOrBoot.Models.Vote({
      votee_id: this.model.id,
      value: 0,
    });

    vote.save({}, {
      success: function () {
        console.log("worked")
      },

      error: function () {
        console.log("didnt work")
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
