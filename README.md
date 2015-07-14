# Cute or Boot

[Live Demo][cuteorboot]

![COBLOGO]

[cuteorboot]: http://www.cuteorboot.us
[COBLOGO]: ./app/assets/images/cuteorboot-banner.jpg

## Description
Cute or Boot, built with Backbone on Rails, is a spinoff of the popular [Hot or Not](https://www.hotornot.com) made especially for pets. Users can register their pets, upload images for their pet, and, most importantly, browse through and vote on a feed of other users' pets.

## Technologies
- Ruby on Rails Framework
- Backbone Framework
- JavaScript
- jQuery
- HTML
- CSS

## The Code
#### The SQL
Users' votes are all tracked and, from them, custom ActiveRecord SQL queries are built to generate ratings, a feed of pets to vote on, a dynamic list of the app's cutest pets, and a fanbase per user. The work is all done in the database, and these helper methods can be found in the `User` model.

The latter 3 all produce a group of users, thus, I organized this logic into `UsersController#index`. Doing this allowed me to setup the Rails API endpoints for a single user and for a group of users using the same JSON partial. On the Backbone end, when fetching a collection of users, I specified which 'group' of users to fetch by making a custom AJAX request, specifying fetch's data option. The added params tell `UsersController#index` which group of users to send back. My custom real-time UsersSearch plugin benefited from this as well, retrieving different sets of users based on the search parameter.

#### The Backbone Views
The trickiest part of developing the app was conceptualizing how to create the single-page feel. The sidebar was a simple yet crucial anchor to the single-page and thus I install it on the initialization of the app.

	window.CuteOrBoot = {
	  ...
	  initialize: function() {
    	var $rootEl = $("#main");
	    var users = new CuteOrBoot.Collections.Users();

    	var router = new CuteOrBoot.Routers.Router({
      	$rootEl: $rootEl,
          users: users
        });

	    var navbar = new CuteOrBoot.Views.Navbar({
          router: router
        });

        $("div.cuteorboot").prepend(navbar.$el);
        navbar.render();

      ...
The sidebar navbar is static and doesn't rely on any models as of now, but if it ever did, this would be a good opportunity to have the data bootstrapped in to place.

Next, the fan list, top 20, and search lists are just entire composite views being swapped in and out; they're not that interesting. The question was, "How do I deal with the page for showing a single specific user and the page for displaying a single user, but from a feed of votable users?" The views are essentially the same, but the former requires just a model, while the latter requires a model from a collection of users.

I ended up successfully using just one view, `UserDashboard`, to handle both these cases. From `router.js`, both the `game` and `showUser` functions pass in a model and collection to `UserDashboard`. However, only in `showUser` is the single model fetched. When we get to `UserDashboard`'s initialization code, we check to see if the model exists. Coming from `showUser`, it's likely that it does, and we go ahead and render subviews.

    initialize: function () {
      if (this.model) {
        this.renderViews();
      } else {
        this.listenTo(this.collection, "sync", this.setNextUser);
      }

      this.listenTo(this.model, "sync", this.render);
      this.listenTo(this.collection, "remove", this.setNextUser);

      ...
Otherwise, coming from `game`, we wait for the collection to sync and trigger a callback that sets the first model in the collection as the view's model before rendering subviews. It works!


## Future To-do List
- [x] Setup Redis: use key-value cache and storing to increase site performance.
- [ ] Refactor location records to be stored as geospatial data in order to use a map API. Then, be able to filter feed by distance or track users on a map based on location.
- [ ] Introduce more social media functionality, including push notifications, messaging, common hobbies, etc.
- [ ] Enhance user experience by:
	* expanding HobbiesController to allow for new hobby creation
	* allowing users to delete pictures, edit username and password
- [ ] Implement more gamification features, including awards and challenges

# Implementation
----------------
## Minimum Viable Product

- [x] Create accounts
- [x] Create sessions (log in/log out)
- [x] Create user profiles
- [x] Upload profile pictures
- [x] View a feed of users and their pictures
- [x] Like/Dislike users
- [x] Users get a rating (cute votes/total votes)
- [x] View a user's profile
- [x] View a list of app's cutest users
- [x] View a list of your likers (fans)

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, User Profile Creation (~1 day)
To start, I'll implement a basic auth system as practiced at a/A. At the end of this phase, users should be able to log in and out or create a new profile. A lot of data will be stored for a user's profile, so I need to implement the right validations and be sure that models are being saved correctly before moving on. I should have the appropriate associations in place as well.

[Details][phase-one]

### Phase 2: Uploading/Adding Pictures, Viewing/Editing Own Profile (~3 days)
I'll need to integrate a 3rd party API for image uploading for this phase. I need to add this feature to the `new_user` form as well. I still need to research how these are implemented, but I'm assuming I'll need a Rails controller for pictures. Once I get this feature up, I'll start building all the views involved for displaying `current_user`'s profile. I'll need an `edit` and `show` action for the `UsersController`, keeping in mind to render json responses, parsing any has_many associations. I'll also put out the initial fixed navbar to a sidebar.


[Details][phase-two]

### Phase 3: "Game" Mode - View Feed of Other Users, Cute It or Boot It, and Ratings (~2-3 days)
We'll be reusing most of the views created in Phase 2, so here I'll want to implement functionality for the game. This is the page users land on after signup/signin. I'll want to bind events to the voting buttons in order to swap models on click. All views involved should be listening to model sync to re-render accordingly. By the end of this phase, I want to make sure I can: 1) toggle `UserDetail` and `UserLanding` Views by clicking a button in `UserNav` 2) "play" the game - vote and see a new user. I'll probably need some seed data at this point.

Even more importantly, create a rating system and display score in `UserDetail` Views. Think (total cute votes)/(total votes). I'll need to update the `User` model to parse a votes association.

[Details][phase-three]

### Phase 4: FansIndex and CutiesIndex (~1-2 days)
Create a `FansIndex` View to let `current_user` see who's liked him so far. Create a `CutiesIndex` View to show the app's cutest users. It'll probably be easiest to define both these associations on the Rails end, and then parse for the info on the Backbone end.

Both these views are composite, each containing `IndexItem` Views for each fan or top cutie that lead to that user's `UserDashboard`.

[Details][phase-four]

### Bonus Features

- [ ] Sort users shown in feed by distance from
- [ ] Game filter: edit settings to search by animal type, age
- [ ] Heat map for fans: Sort list of fans by city
- [x] Interactive search (by username)
- [x] Thumbnail view for search results
- [x] "Up next" thumbnails: interactive preview of users coming up next in feed
- [ ] Notifications for new likes and messages
- [ ] Chatting, enabled by mutual likes
- [ ] Ability to block someone mutually liked
- [ ] Show common hobbies between yourself and other user
- [ ] Badges/Awards for users with top ratings
- [ ] Other misc. awards: most hobbies("interesting"), hot streaks (consecutive weeks liked), popularity thresholds
- [ ] Counters: # of photos, fans, notifications, shared hobbies, hot streak
- [x] Carousel pictures
- [ ] Pagination or 'load more on scroll' for hotties and fans index
- [x] Stylish buttons
- [ ] Bind shortcut keys for liking/disliking (e.g. 1 and 2)
- [x] Gzip assets to reduce page weight and accelerate UX
- [x] Create a guided tour


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
