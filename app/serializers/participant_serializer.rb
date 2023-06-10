class ParticipantSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :firstname, :lastname, :email, :dob, :city, :occupation,
             :country, :nationality, :phoneno, :usertype, :organization_id, :created_at, :picture

  belongs_to :organization

  def picture
    rails_blob_path(object.picture, only_path: true) if object.picture.attached?
  end
end
