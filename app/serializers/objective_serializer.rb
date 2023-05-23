class ObjectiveSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :description, :organization_id

  belongs_to :organization
end
