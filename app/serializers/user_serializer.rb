class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :firstname, :lastname, :email, :created_at, :confirmed_at,  :photo

  def photo
    return unless object.photo.attached?

    rails_blob_path(object.photo, only_path: true)
  end
end
