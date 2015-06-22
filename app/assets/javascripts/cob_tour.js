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
        content: "Glad you decided to join us! I won't keep you away from the super cute pets for long. Just going to give you a quick guide through the app's features!"
      },
      {
        element: ".game.col-xs-12",
        placement: "right",
        title: "The Pet Reel",
        content: "Upon login, you get to meet all the pets right away!"
      },
      {
        element: "li.tour-profile-step",
        placement: "bottom",
        title: "Pet Profile",
        content: "Click here to view more details about the pet. Go ahead, give it a click!",
        reflex: function () {
          next();
        }
      },
      {
        element: "button.cuteit",
        placement: "bottom",
        title: "Voting",
        content: ""
      }
    ]);

    tour.init();

    tour.start();
  }
};
