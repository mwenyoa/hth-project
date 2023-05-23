class Work < ApplicationRecord
  belongs_to :organization
  has_one_attached :work_image

  # validations
  validates :name, presence: true, uniqueness: true
  validates :description,  :work_date,  :video_url, presence: true
end
