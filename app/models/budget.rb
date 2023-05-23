class Budget < ApplicationRecord
  belongs_to :organization
  has_one_attached :budget_file

  validates :name, presence: true, uniqueness: true
  validates :amount, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :description, presence: true, length: { minimum: 10 }
  validates :startperiod, :endperiod, presence: true, format: { with: /\d{4}-\d{2}-\d{2}/ }
end
