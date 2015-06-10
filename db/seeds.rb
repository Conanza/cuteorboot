# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


hobbies = ["Running", "Swimming", "Napping", "Cuddling", "Eating", "Sunbathing"]

hobbies.each do |hobby|
  Hobby.create!(name: hobby)
end

User.create!(
  username: "conan",
  password: "password",
  gender: "M",
  birthdate: Time.new(1986, 1, 2),
  city: "San Francisco",
  state: "California",
  animal_type: "other",
  breed: "human",
  website: "conantzou.tumblr.com",
  instagram: "instagram.com/conanza",
  about_me: "I'm the owner!",
  hobby_ids: ["1", "2", "3", "4"]
)
