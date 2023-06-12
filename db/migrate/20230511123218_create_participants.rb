class CreateParticipants < ActiveRecord::Migration[7.0]
  def change
    create_table :participants do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.datetime :dob
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
