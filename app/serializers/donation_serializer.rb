class DonationSerializer < ActiveModel::Serializer
  attributes %i[id amount purpose]

  belongs_to :user
  belongs_to :organization
end
