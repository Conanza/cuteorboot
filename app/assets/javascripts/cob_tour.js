window.CuteOrBootTour = {
  initialize: function () {
    var tour = new Tour({
        storage: false
    });

    tour.addSteps([
      {
        element: ".cuteorboot",
        placement: "top",
        backdrop: true,
        title: "Welcome to Cute or Boot!",
        content: "Glad you decided to join us!<br><br>I won't keep you away from the super cute pets for long. Just going to give you a quick guide through the app's features!",
        template: function () {
          var popover = "<div class='popover tour'><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default' data-role='prev'>« Prev</button><button class='btn btn-default' data-role='next'>Next »</button><button class='btn btn-default' data-role='end'>End tour</button></div></div>";
          return popover;
        }
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
        content: "See who's up next!"
      },
      {
        path: "#cuties/" + CURRENT_USER_ID,
        element: ".showuser",
        placement: "right",
        title: "View Your Own Profile"
      }

    ]);

    tour.init();

    tour.start();
  }
};
