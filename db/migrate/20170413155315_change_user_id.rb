class ChangeUserId < ActiveRecord::Migration[5.0]
  def up
    change_table :users do |t|
      t.change :uber_id, :integer
    end
  end

  def down
    change_table :users do |t|
      t.change :uber_id, :string
    end
  end

  def up
    change_table :users do |t|
      t.change :lyft_id, :integer
    end
  end

  def down
    change_table :products do |t|
      t.change :lyft_id, :string
    end
  end
end
