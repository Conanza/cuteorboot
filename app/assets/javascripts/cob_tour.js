window.CuteOrBootTour = {
  initialize: function () {
    var tour = new Tour({
        storage: window.sessionStorage
    });

    tour.addSteps([
      {
        element: ".cuteorboot",
        placement: "top",
        backdrop: true,
        title: "Welcome to Cute or Boot!",
        content: "Glad you decided to join us! You're in for a treat.<br><br>If you've ever used HotOrNot, this should be very familiar. If not, I won't keep you away from the super cute pets for long. Just going to give you a quick guide through the app's features!",
        template: function () {
          var popover = "<div class='popover tour'><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><div class='btn-group'><button class='btn btn-default' data-role='next'>Next »</button></div></div></div>";
          return popover;
        },
      },
      {
        element: ".game.col-xs-12",
        placement: "right",
        title: "The Pet Reel",
        content: "Upon login, you get to meet all the pets right away!"
      },
      {
        element: ".landing-carousel",
        placement: "top",
        title: "Pictures!",
        content: "Click the arrows or swipe to see more pictures."
      },
      {
        element: "li.tour-profile-step",
        placement: "bottom",
        title: "Pet Profile",
        content: "Click here to view more details about the pet, including their personal score!<br><br>Go ahead, give it a click!",
        reflex: true
      },
      {
        element: "ul.tour-voting-step",
        placement: "bottom",
        title: "Voting",
        content: "You know what to do next!<br><br>Click the buttons to give a cute vote or boot it.<br>(Don't worry, no pets are harmed in the process).",
        reflex: true
      },
      {
        element: ".up-next-users",
        placement: "left",
        title: "Who's next??",
        content: "See who's up next!",
        onNext: function (tour) {
          document.location.href = "/#cuties/" + CURRENT_USER_ID;
        }
      },
      {
        element: "li.col-xs-12.showuser",
        placement: "right",
        title: "Your Pet's Profile",
        content: "Viewing your pet's profile offers a few more options.<br><br>Hover over this to logout.",
        reflex: true
      },
      {
        element: "li.tour-upload-step",
        placement: "bottom",
        title: "Upload Images",
        content: "Add more pictures here to get more cute votes!"
      },
      {
        element: "li.tour-editprofile-step",
        placement: "bottom",
        title: "Edit Profile",
        content: "You can change your pet's information here.",
        onNext: function (tour) {
          document.location.href = "/#top-cuties-list";
        }
      },
      {
        element: ".topCutiesList.col-xs-12",
        placement: "right",
        title: "The Cutest Cuties",
        content: "Almost done!<br><br>Make sure to check out Cute or Boot's highest rated pets.",
        onNext: function (tour) {
          document.location.href = "/#fans";
        }
      },
      {
        element: ".showFans.col-xs-12",
        placement: "right",
        title: "Your Pet's Fans",
        content: "You can also browse through all the pets who've voted your pet cute!",
        onNext: function (tour) {
          document.location.href = "/#search";
        }
      },
      {
        element: ".searchUsers.col-xs-12",
        placement: "right",
        title: "Pet Search",
        content: "Check this out to search for pets by name, state, and more.",
        onNext: function (tour) {
          document.location.href = "/#petreel";
        }
      },
      {
        orphan: true,
        placement: "top",
        title: "Have fun!",
        content: "Thanks again for joining Cute or Boot. I'll let you get to voting. Don't forget to add pictures of your pet!",
        template: function () {
          var popover = "<div class='popover tour'><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><div class='btn-group'><button class='btn btn-default' data-role='end'>Yay!</button></div></div></div>";
          return popover;
        }
      }
    ]);

    tour.init();

    tour.start();
  }
};
