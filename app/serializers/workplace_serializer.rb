class WorkplaceSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :description, :quicknote, :organization_id, :workplace_images

  def workplace_images
    return unless object.workplace_images.attached?

    object.workplace_images.map do |image|
      {
        id: image.id,
        url: rails_blob_url(image, only_path: true)
      }
    end
  end
end
