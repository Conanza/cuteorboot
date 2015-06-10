class Hobby < ActiveRecord::Base
  has_many :hobbyings, dependent: :destroy
  has_many :users, through: :hobbyings
end
