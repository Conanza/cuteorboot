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

  render: function () {
    if (!this.model) {
      return this;
    }

    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }
});
