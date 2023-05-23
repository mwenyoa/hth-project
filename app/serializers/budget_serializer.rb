class BudgetSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :amount, :description, :startperiod, :endperiod, :organization_id, :budget_file

  belongs_to :organization

  def budget_file
    rails_blob_path(object.budget_file, only_path: true) if object.budget_file.attached?
  end
end


