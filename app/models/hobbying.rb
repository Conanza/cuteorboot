class Hobbying < ActiveRecord::Base
  validates :user, :hobby, presence: true
  validates :user_id, uniqueness: { scope: :hobby_id }

  belongs_to :user
  belongs_to :hobby
end
