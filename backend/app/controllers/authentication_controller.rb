class AuthenticationController < ApplicationController
    before_action :authorize_request, except: %i[login facebook_login]

    # POST /auth/login
    def login
        @user = UserAccount.find_by_email(params[:email])
        if @user&.authenticate(params[:password])
            token = JsonWebToken.encode(account_id: @user.user_profile.id)
            time = Time.now + 24.hours.to_i
            render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                           name: @user.name }, status: :ok
        else
            render json: { error: 'unauthorized' }, status: :unauthorized
        end
    end

    # POST /auth/facebook
    def facebook_login
        new_fb_acc = FacebookAccount.new(facebook_id: facebook_params[:uid])

        if new_fb_acc.save
            new_fb_acc.create_user_profile(name: facebook_params[:name], 
                                           email: facebook_params[:email], 
                                           avatar_url: facebook_params[:avatar_url])
            fb_acc = new_fb_acc
        else
            fb_acc = FacebookAccount.find_by_facebook_id(facebook_params[:uid])
            fb_acc.user_profile.update(name: facebook_params[:name], 
                                        email: facebook_params[:email], 
                                        avatar_url: facebook_params[:avatar_url])
        end

        token = JsonWebToken.encode(account_id: fb_acc.user_profile.id)
        time = Time.now + 24.hours.to_i
        render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                        username: fb_acc.user_profile.name }, status: :ok
    end

    private 

    def login_params
        params.permit(:email, :password)
    end
    
    def facebook_params
        params.permit(:email, :name, :uid, :avatar_url)
    end
        
end
