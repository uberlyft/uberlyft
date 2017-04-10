class UsersController < ApplicationController


 private

 def user_params
   params.permit(:email, :name)
 end
end
