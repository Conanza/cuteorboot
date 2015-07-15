namespace :seed_dump do
  desc "Dump hobbies"
  task hobbies: :environment do
    SeedDump.dump(Hobby, file: 'db/seeds.rb')
  end

  desc "Dump users"
  task users: :environment do
    SeedDump.dump(User, file: 'db/seeds.rb', append: true)
  end

  desc "Dump pictures"
  task pictures: :environment do
    SeedDump.dump(Picture, file: 'db/seeds.rb', append: true)
  end

  desc "Dump hobbyings"
  task hobbyings: :environment do
    SeedDump.dump(Hobbying, file: 'db/seeds.rb', append: true)
  end

  desc "Dump votes"
  task votes: :environment do
    SeedDump.dump(Vote, file: 'db/seeds.rb', append: true)
  end

  desc "Dump all models"
  task all: [:hobbies, :users, :pictures, :hobbyings, :votes]
end
