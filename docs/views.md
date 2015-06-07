# View Wireframes

## Root Page
- Root HTML loaded by rails
- Contains header with new_session form
- Also provides guest tour button
![root]

## New User Registration Page
- HTML signup form loaded by rails
![new_user]

## Currentuser's UserDashboard View w/ UserDetail View
- **UserDashboard is COMPOSITE**: manages UserNav View and UserDetail/UserLanding View
- register event to toggle between detail and landing views when clicking toggle button
![current_user_detail]

## Currentuser's UserDashboard w/ UserLanding View
- UserLanding View in Dashboard
![current_user_landing]

## EditProfileForm View
- when clicking 'edit profile' button
![edit_profile]

## AddPhotoForm View
- when clicking 'add photo' button
- note: how to make this a popup window over the dashboard vs. being a whole new view?
![add_photo]

## UserDashboard w/ UserLanding View
- on successful sign in, redirect here
![user_landing]

## UserDashboard w/ UserDetail View
- register event to swap models and re-render Dashboard with new model when clicking like/dislike
![user_detail]

## HottiesIndex View
- **COMPOSITE**: holds index item thumbnail views that navigate to user's dashboard view
![hotties_index]

## FansIndex View
- **COMPOSITE**: holds index item thumbnail views that navigate to user's dashboard view
![fans_index]



[root]: ./wireframes/root.jpg
[new_user]: ./wireframes/new_user.jpg
[current_user_detail]: ./wireframes/current_user_user_dashboard_with_user_detail.jpg
[current_user_landing]: ./wireframes/current_user_user_dashboard_with_user_landing.jpg
[edit_profile]: ./wireframes/edit_profile.jpg
[add_photo]: ./wireframes/add_photo.jpg
[user_landing]: ./wireframes/user_dashboard_with_user_landing.jpg
[user_detail]: ./wireframes/user_dashboard_with_user_detail.jpg
[hotties_index]: ./wireframes/top_hotties_index.jpg
[fans_index]: ./wireframes/fans_index.jpg
