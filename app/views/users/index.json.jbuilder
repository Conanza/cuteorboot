json.array! @users do |user|
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
    :about_me
  )

  json.hobbies user.hobbies do |hobby|
    json.extract!(hobby, :id, :name)
  end
end
