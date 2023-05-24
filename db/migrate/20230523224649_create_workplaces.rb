class CreateWorkplaces < ActiveRecord::Migration[7.0]
  def change
    create_table :workplaces do |t|
      t.string :name
      t.string :description
      t.string :quicknote
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
