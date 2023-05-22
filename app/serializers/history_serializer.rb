class HistorySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :event_title, :event_date, :description, :link, :image
  belongs_to :organization

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
