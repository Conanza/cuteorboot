class Vote < ActiveRecord::Base
  validates :voter, :votee, presence: true
  validates :voter_id, uniqueness: { scope: :votee_id }
  validates :value,
            inclusion: { in: [0, 1], message: "Must be a cute or boot" }

  belongs_to :voter, class_name: "User", foreign_key: :voter_id
  belongs_to :votee, class_name: "User", foreign_key: :votee_id
end
