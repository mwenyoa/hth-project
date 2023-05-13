class CreateOrganizations < ActiveRecord::Migration[7.0]
  def change
    create_table :organizations do |t|
      t.string :logo
      t.string :name
      t.string :mission
      t.string :vision

      t.timestamps
    end
  end
end
