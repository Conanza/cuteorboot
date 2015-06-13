json.array! @users do |user|
  json.partial! "users/show", user: user
end
