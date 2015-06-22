window.CuteOrBootTourDeux = {
  initialize: function () {
    var tour = new Tour({
        storage: false
    });

    tour.addSteps([
      {
        element: ".showuser",
        placement: "right",
        title: "Your Pet's Profile",
        content: "Viewing your pet's profile offers a few more options."
      },
    ]);

    tour.init();

    tour.start();
  }
};
