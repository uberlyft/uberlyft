class AddCommuterTokenToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :commuter_token, :string
    add_index :users, :commuter_token, unique: true
  end
end
