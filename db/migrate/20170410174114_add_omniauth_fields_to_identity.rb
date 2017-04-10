class AddOmniauthFieldsToIdentity < ActiveRecord::Migration[5.0]
  def change
    add_column :identities, :accesstoken, :string
    add_column :identities, :refreshtoken, :string
    add_column :identities, :first_name, :string
    add_column :identities, :last_name, :string
    add_column :identities, :email, :string
  end
end
