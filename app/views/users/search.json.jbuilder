json.array! @users do |user|
  json.extract!(user, :id, :username)

  json.pictures user.pictures do |picture|
    json.extract!(picture, :image_url, :thumb_url)
  end
end
