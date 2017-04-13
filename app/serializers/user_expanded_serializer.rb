class UserExpandedSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :commuter_token
end
