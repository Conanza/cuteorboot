json.extract!(
  @user,
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

json.hobbies @user.hobbies do |hobby|
  json.extract!(hobby, :id, :name)
end
