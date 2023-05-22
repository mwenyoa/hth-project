class History < ApplicationRecord
  belongs_to :organization
  has_one_attached :image

  # validations
  validates :event_title, presence: true, uniqueness: true
  validates :description, :event_date,:organization_id, :link, presence: true
end
