class AuthenticationController < ApplicationController
    before_action :authorize_request, except: :login

    # POST /auth/login
    def login
        @user = UserAccount.find_by_email(params[:email])
        if @user&.authenticate(params[:password])
            token = JsonWebToken.encode(account_id: @user.user_profile.id)
            time = Time.now + 24.hours.to_i
            render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                           username: @user.name }, status: :ok
        else
            render json: { error: 'unauthorized' }, status: :unauthorized
        end
    end

    private 

    def login_params
        params.permit(:email, :password)
    end
end
