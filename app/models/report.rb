class Report < ApplicationRecord
  belongs_to :organization
  has_one_attached :report_file
  # validations
  validates :name, presence: true, uniqueness: true
  validates :description, :repotype, presence: true
  validates :organization_id, presence: true
end
