class User < ApplicationRecord
  belongs_to :organization
  has_one_attached :picture
end
