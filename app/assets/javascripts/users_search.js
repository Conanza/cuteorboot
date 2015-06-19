$.UsersSearch = function (el) {
  this.$el = $(el);
  this.formName = this.$el.find("div.search-form").data("form-name");
  this.$input = this.$el.find("input[name="+ this.formName + "]");
  this.$div = this.$el.find(".users-results");
  this.$input.focus();
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
    data: {
      form_type: this.formName,
      query: input
    },

    success: this.renderResults.bind(this)
  });
};

$.UsersSearch.prototype.renderResults = function (users) {
  this.$div.empty();

  if (users.length > 0) {
    users.each(function (user) {
      var searchItem = new CuteOrBoot.Views.SearchItem({ model: user });
      this.$div.append(searchItem.$el);
      searchItem.render();
    }.bind(this));
  } else {
    this.$div.append("No matches found");
  }
};

$.fn.usersSearch = function () {
  return this.each(function () {
    new $.UsersSearch(this);
  });
};
