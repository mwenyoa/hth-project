class Organization < ApplicationRecord
    has_many :users, dependent: :destroy
    has_one_attached :logo

    # validations
    
end
