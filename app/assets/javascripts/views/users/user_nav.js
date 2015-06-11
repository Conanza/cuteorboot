CuteOrBoot.Views.UserNav = Backbone.CompositeView.extend({
  template: JST["users/nav"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "userselected", this.swapModel);
  },

  events: {
    "click .cuteit": "cuteVote",
    "click .bootit": "bootVote"
  },

  swapModel: function (newUser) {
    this.model = newUser;
    this.listenTo(this.model, "sync", this.render);
    this.render();
  },

  cuteVote: function (event) {
    event.preventDefault();
    console.log("cuted");

    this.collection.remove(this.model);

    // var vote = new CuteOrBoot.Models.Vote({
    //   votee_id: this.model,
    //   value: 1,
    // });
    //
    // vote.save({}, {});
  },

  bootVote: function (event) {
    event.preventDefault();
    console.log("booted");

    this.collection.remove(this.model);

    // var vote = new CuteOrBoot.Models.Vote({
    //   votee_id: this.model,
    //   value: 0,
    // });
    //
    // vote.save({}, {});
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
