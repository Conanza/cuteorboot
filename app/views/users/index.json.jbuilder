if @users.count == 1
  json.array! @users do |user|
    json.partial! "users/show", user: user
    json.game_finished true
  end
else
  json.array! @users do |user|
    json.partial! "users/show", user: user
  end
end


# json.hotties User.limit(5) do |user|
#   json.extract!(user, :username)
#
# end
