class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.string :name
      t.string :description
      t.string :repotype
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
