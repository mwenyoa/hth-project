class AddUserColumnsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :role, :string, default: 'guest'
    add_column :users, :password_digest, :string
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
  end
end
