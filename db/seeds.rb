# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
HOBBIES = ["Running", "Swimming", "Napping", "Cuddling", "Eating", "Sunbathing"]
HOBBY_IDS = HOBBIES.map.with_index{ |hobby, i| (i + 1).to_s }

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
  hobby_ids = HOBBY_IDS.dup
  hobby_amt = rand(HOBBY_IDS.length + 1)

  hobby_amt.times do
    hobby_ids.shuffle!
    random_ids << hobby_ids.pop
  end

  random_ids
end

User.create(
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

User.find_by_username("conan").pictures.create(image_url: "http://img1.wikia.nocookie.net/__cb20080918055501/marveldatabase/images/c/c4/Conan_02.jpg",
                                               thumb_url: "http://img1.wikia.nocookie.net/__cb20080918055501/marveldatabase/images/c/c4/Conan_02.jpg")
User.find_by_username("conan").pictures.create(image_url: "https://static.crowdvoice.com/uploads/237M8sU_1389417789100_r11v9Wi7J2KnyWFe4RR68Q",
                                              thumb_url: "https://static.crowdvoice.com/uploads/237M8sU_1389417789100_r11v9Wi7J2KnyWFe4RR68Q")

100.times do |i|
  name = Faker::Internet.user_name
  url = Faker::Internet.url("www.facebook.com", "/#{name}")

  User.create(
    username: name,
    password: "password",
    gender: random_gender,
    birthdate: Time.new(random_year, random_month, random_day),
    city: Faker::Address.city,
    state: random_state,
    animal_type: random_type,
    breed: "breed",
    website: url,
    instagram: "instagram.com/#{name}",
    about_me: "I'm #{name}",
    hobby_ids: random_hobbies
  )
end

(1..50).each do |votee_id|
  (1..50).each do |voter_id|
    next if votee_id == voter_id
    next if rand(3) == 1

    User
      .find(votee_id)
      .received_votes
      .create(voter_id: voter_id, value: rand(2))
  end
end
