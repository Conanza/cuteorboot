require 'active_support/concern'

module Awardable
  extend ActiveSupport::Concern

  def test
    puts "test"
  end
end
