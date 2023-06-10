class Donation < ApplicationRecord
  belongs_to :organization
  belongs_to :participant

  validates :purpose, uniqueness: true, presence: true
  validates :amount, :participant_id, :organization_id, numericality: { great_than: 0 }, presence: true
end
