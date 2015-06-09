class Hobbying < ActiveRecord::Base
  belongs_to :user
  belongs_to :hobby

  validates :user, :hobby, presence: true
end
