class IdentitySerializer < ActiveModel::Serializer
  attributes :id, :uid, :provider
end
