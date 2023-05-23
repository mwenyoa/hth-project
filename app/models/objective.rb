class Objective < ApplicationRecord
  belongs_to :organization
  validates :description, :organization_id, presence: true
end
