class CreateWorks < ActiveRecord::Migration[7.0]
  def change
    create_table :works do |t|
      t.string :name
      t.string :description
      t.date :work_date
      t.string :video_url
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
