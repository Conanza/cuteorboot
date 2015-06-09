class Hobby < ActiveRecord::Base
  has_many :hobbyings
  has_many :users, through: :hobbyings
end
