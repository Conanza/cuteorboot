# Cute or Boot

[Heroku link][heroku]

[heroku]: https://cuteorboot.herokuapp.com/

## Minimum Viable Product
Cute or Boot is built on Rails and Backbone, and it's a spinoff of hotornot.com for pets. Users (pets) can:

- [ ] Create accounts
- [ ] Create sessions (log in/log out)
- [ ] Create user profiles
- [ ] Upload and delete profile pictures
- [ ] View a feed of users and their pictures
- [ ] Like/Dislike users
- [ ] Users get a rating (hot votes/total votes)
- [ ] View a user's profile
- [ ] View a list of app's hottest users
- [ ] View a list of your likers (fans)

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Blog Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create blogs using
a simple text form in a Rails view. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing Blogs and Posts (~2 days)
I will add API routes to serve blog and post data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create blogs and view both blogs and posts, all
inside a single Backbone app.

[Details][phase-two]

### Phase 3: Editing and Displaying Posts (~2 days)
I plan to use third-party libraries to add functionality to the `PostForm` and
`PostShow` views in this phase. First I'll need to add a Markdown editor to the
`PostForm`, and make sure that the Markdown is properly escaped and formatted in
the `PostShow` view. I also plan to integrate Filepicker for file upload so
users can add images to blog posts.

[Details][phase-three]

### Phase 4: User Feeds (~1-2 days)
I'll start by adding a `feed` route that uses the `current_user`'s
`subscribed_blogs` association to serve a list of blog posts ordered
chronologically. On the Backbone side, I'll make a `FeedShow` view whose `posts`
collection fetches from the new route.  Ultimately, this will be the page users
see after logging in.

[Details][phase-four]

### Phase 5: Searching for Blogs and Posts (~2 days)
I'll need to add `search` routes to both the Blogs and Posts controllers. On the
Backbone side, there will be a `SearchResults` composite view has `BlogsIndex`
and `PostsIndex` subviews. These views will use plain old `blogs` and `posts`
collections, but they will fetch from the new `search` routes.

[Details][phase-five]

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
[phase-five]: ./docs/phases/phase5.md
