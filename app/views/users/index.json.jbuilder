json.users @users do |user|
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
end
