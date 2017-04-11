class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.references :user, index: true, foreign_key: true
      t.string :address

      t.timestamps
    end
  end
end
