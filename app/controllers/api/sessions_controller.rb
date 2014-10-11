module API
	class SessionsController < ApplicationController
    def create
      admin = Admin.find_for_database_authentication(email: params[:email])

      if admin && admin.valid_password?(params[:password])
      	sign_in admin
        set_login_token
      	render json: {
      	  session: { id: admin.id, email: admin.email, token: admin.login_token }
      	}, status: :created
      else
        render json: {
          errors: {
            email: "Invalid email or password!"
          }
        }
      end
    end

    def destroy
      sign_out :admin
      render json: {}, status: :accepted
    end

		private
		def set_login_token
			token = Devise.friendly_token
			session[:token] = token
			current_admin.login_token = token
			current_admin.save
		end
	end
end