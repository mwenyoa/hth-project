class OrganizationSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name,  :mission, :vision, :logo

  def logo
    rails_blob_path(object.logo, only_path: true) if object.logo.attached?
  end
end
