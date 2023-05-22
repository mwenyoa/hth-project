class CreateHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :histories do |t|
      t.string :event_title
      t.string :description
      t.string :event_date
      t.string :link
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
