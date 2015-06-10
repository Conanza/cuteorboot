# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  gender          :string           not null
#  birthdate       :datetime         not null
#  city            :string           not null
#  state           :string           not null
#  animal_type     :string           not null
#  breed           :string
#  website         :string
#  instagram       :string
#  about_me        :text
#  created_at      :datetime
#  updated_at      :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
