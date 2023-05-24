class Workplace < ApplicationRecord
  belongs_to :organization
  has_many_attached :workplace_images

  validates :name, uniqueness: true, presence:true
  validates :description, :quicknote, presence: true
end
