# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
HOBBIES = ["Running", "Swimming", "Napping", "Cuddling", "Eating", "Sunbathing"]

HOBBIES.each do |hobby|
  Hobby.create!(name: hobby)
end

def random_type
  User::ANIMAL_TYPES[rand(User::ANIMAL_TYPES.length)]
end

def random_state
  User::STATES[rand(50)]
end

def random_month
  rand(12) + 1
end

def random_day
  rand(28) + 1
end

def random_year
  rand(31) + 1984
end

def random_gender
  ["M", "F"][rand(2)]
end

def random_hobbies
  random_ids = []
  hobby_ids = ["1", "2", "3", "4", "5", "6"]
  hobby_amts = rand(7)

  hobby_amts.times do
    hobby_ids.shuffle!
    random_ids << hobby_ids.pop
  end

  random_ids
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

100.times do |i|
  User.create!(
    username: "user#{i + 1}",
    password: "password",
    gender: random_gender,
    birthdate: Time.new(random_year, random_month, random_day),
    city: "city",
    state: random_state,
    animal_type: random_type,
    breed: "breed",
    website: "website",
    instagram: "instagram.com/user#{i + 1}",
    about_me: "I'm user #{i + 1}",
    hobby_ids: random_hobbies
  )
end
