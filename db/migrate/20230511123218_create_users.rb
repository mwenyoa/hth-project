class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :password_digest
      t.string :dob
      t.string :city
      t.string :country
      t.string :nationality
      t.string :phoneno
      t.string :occupation
      t.string :usertype
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
