class CreateBudgets < ActiveRecord::Migration[7.0]
  def change
    create_table :budgets do |t|
      t.string :name
      t.integer :amount
      t.string :description
      t.string :startperiod
      t.string :endperiod
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
