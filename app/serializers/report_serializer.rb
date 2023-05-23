class ReportSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :description, :repotype, :report_file

  belongs_to :organization

  def report_file
    rails_blob_path(object.report_file, only_path: true) if object.report_file.attached?
  end
end
