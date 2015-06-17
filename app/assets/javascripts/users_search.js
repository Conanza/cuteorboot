$.UsersSearch = function (el) {
  this.$el = $(el);
  this.$input = this.$el.find("input[name=username]");
  this.$ul = this.$el.find(".users-results");

  this.$input.on("input", this.handleInput.bind(this));
};

$.UsersSearch.prototype.handleInput = function (event) {
  var input = this.$input.val();
  if (input === "") {
    this.renderResults([]);
    return;
  }

  var searchResults = new CuteOrBoot.Collections.Users();
  searchResults.fetch({
    data: { query: input },
    success: this.renderResults.bind(this)
  });
};

$.UsersSearch.prototype.renderResults = function (users) {
  this.$ul.empty();

  if (users.length > 0) {
    users.each(function (user) {
      var searchItem = new CuteOrBoot.Views.SearchItem({ model: user });
      this.$ul.append(searchItem.$el);
      searchItem.render();
    }.bind(this));
  }
};


$.fn.usersSearch = function () {
  return this.each(function () {
    new $.UsersSearch(this);
  });
};
