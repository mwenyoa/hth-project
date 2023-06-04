class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_heplers
  attributes :id, :firstname, :lastname, :email, :photo

  def photo
    return unless object.photo.attached?

    rails_blob_path(object.photo, only_path: true)
  end
end
