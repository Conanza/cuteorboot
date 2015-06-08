# Phase 2: Uploading/Adding Pictures, Viewing/Editing Own Profile

## Rails
#### Routes
* Pictures

#### Models
* Picture

#### Controllers
* PicturesController (new, create, destroy)
* UsersController +(edit, show)

#### Views
* users/show.json.jbuilder
* **update** users/new to include an image upload field

## Backbone
#### Models
* User (parses nested `hobbies` and `pictures` associations)
* Picture

#### Collections
* Users
* Pictures

#### Views
* Navbar View
* EditProfile View
* AddPhotoView
* UserDashboard CompositeView (contains: UserNav View, UserDetail/UserLanding Views)
* UserNav View
* UserDetail View _(possibly composite? containing a PicturesCarousel View)_
* UserLanding View _(possibly composite? containing a PicturesCarousel View)_


#### Routers
* router

## Gems/Libraries
Paperclip/Filepicker?
Jbuilder
backbone-on-rails
serializejson