json.extract!(
  user,
  :id,
  :username,
  :gender,
  :birthdate,
  :city,
  :state,
  :animal_type,
  :breed,
  :website,
  :instagram,
  :about_me,
  :rating
)

json.hobbies user.hobbies do |hobby|
  json.extract!(hobby, :id, :name)
end

json.pictures user.pictures do |picture|
  json.extract!(picture, :user_id, :image_url, :thumb_url)
end

json.current_users_vote user.vote_by_user(current_user)

if current_user.id == user.id
  json.fans user.fans do |fan|
    json.extract!(fan, :id, :username, :gender, :city, :state, :pictures)
  end

  json.fan_count user.fans.count
else
  json.fan_count user.fans.count
end
