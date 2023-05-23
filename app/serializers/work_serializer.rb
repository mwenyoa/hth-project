class WorkSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes %i[name description work_date video_url work_image]

  belongs_to :organization

  def work_image
    rails_blob_path(object.work_image, only_path: true) if object.work_image.attached?
  end
end
