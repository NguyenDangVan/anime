class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

	def login
		user = User.find_by(email: params[:username])

		if user && user.password == params[:password]
			puts "Login success"
			render json: {user: user}
		else
			payload = {
				login: "Invalid password or email",
				status: 401
			}
			puts "Login failed"

			render json: payload, status: :bad_request
		end
	end
end
