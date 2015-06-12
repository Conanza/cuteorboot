# Cute or Boot

[Heroku link][heroku]

[heroku]: https://cuteorboot.herokuapp.com/

## Minimum Viable Product
Cute or Boot is built on Rails and Backbone, and it's a spinoff of hotornot.com for pets. Users (pets) can:

- [x] Create accounts
- [x] Create sessions (log in/log out)
- [x] Create user profiles
- [x] Upload profile pictures
- [ ] Delete profile pictures
- [x] View a feed of users and their pictures
- [x] Like/Dislike users
- [x] Users get a rating (hot votes/total votes)
- [ ] View a user's profile
- [ ] View a list of app's hottest users
- [ ] View a list of your likers (fans)

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, User Profile Creation (~1 day)
To start, I'll implement a basic auth system as practiced at A/a. At the end of this phase, users should be able to log in and out or create a new profile. A lot of data will be stored for a user's profile, so I need to implement the right validations and be sure that models are being saved correctly before moving on. I should have the appropriate associations in place as well.

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

### Bonus Features (TBD)
- [ ] Sort users shown in feed by distance from
- [ ] Game filter: edit settings to search by animal type, age
- [ ] Heat map for fans: Sort list of fans by city
- [ ] Interactive search (by username)
- [ ] Thumbnail view for search results
- [ ] "Up next" thumbnails: interactive preview of users coming up next in feed
- [ ] Notifications for new likes and messages
- [ ] Chatting, enabled by mutual likes
- [ ] Ability to block someone mutually liked
- [ ] Show common hobbies between yourself and other user
- [ ] Badges/Awards for users with top ratings
- [ ] Other misc. awards: most hobbies("interesting"), hot streaks (consecutive weeks liked), popularity thresholds
- [ ] Counters: # of photos, fans, notifications, shared hobbies, hot streak
- [ ] Carousel pictures
- [ ] Pagination or 'load more on scroll' for hotties and fans index
- [ ] Stylish buttons
- [ ] Bind shortcut keys for liking/disliking (e.g. 1 and 2)


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
