class CreateObjectives < ActiveRecord::Migration[7.0]
  def change
    create_table :objectives do |t|
      t.string :description
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
