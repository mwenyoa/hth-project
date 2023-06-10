class Participant < ApplicationRecord
  belongs_to :organization
  has_one_attached :picture

  # Validations
  validates :firstname, :lastname, :dob, :city, :country,
            :nationality, :phoneno, :occupation, :usertype, :organization_id,
            presence: true
  validates :email, uniqueness: true, presence: true
end
