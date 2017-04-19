class AddIdsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :uber_id, :integer
    add_column :users, :lyft_id, :integer
  end
end
