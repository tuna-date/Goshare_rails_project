class AuthenticationController < ApplicationController
    before_action :authorize_request, except: %i[login facebook_login]

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

    # POST /auth/:provider/callback
    def facebook_login
        auth = request.env["omniauth.auth"]
        new_fb_acc = FacebookAccount.new(facebook_id: auth.uid)
        if new_fb_acc.save
            new_fb_acc.create_user_profile(name: auth.info.name, email: auth.info.email)
            fb_acc = new_fb_acc
        else
            fb_acc = FacebookAccount.find_by_facebook_id(auth.uid)
            fb_acc.user_profile.update(name: auth.info.name, email: auth.info.email)
        end

        token = JsonWebToken.encode(account_id: fb_acc.user_profile.id)
        time = Time.now + 24.hours.to_i
        render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                        username: fb_acc.user_profile.name }, status: :ok

    rescue Faraday::Error::ConnectionFailed => e
        render json: { error: e }, status: :not_found
    end

    private 

    def login_params
        params.permit(:email, :password)
    end
        
end
