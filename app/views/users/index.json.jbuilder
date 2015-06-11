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
    :about_me,
    :rating
  )

  json.hobbies user.hobbies do |hobby|
    json.extract!(hobby, :id, :name)
  end

  json.pictures user.pictures do |picture|
    json.extract!(picture, :user_id, :image_url, :thumb_url)
  end
end
