class UserProfilesController < ApplicationController
    before_action :authorize_request, except: :create
    before_action :find_user, except: %i[create index]

    # GET /users
    def index
        @users = UserProfile.all
        render json: @users, status: :ok
    end

    # GET /users/{username}
    def show
        render json: @user, status: :ok
    end

    # POST /users
    def create
        @user = UserAccount.new(user_params)
        if @user.save
            @user.create_user_profile(user_profile_params)
            render json @user, status: :created
        else
            render json: { errors: @user.errors.full_messages },
            status: :unprocessable_entity
        end
    end

    # PUT /users/{username}
    def update
        unless @user.update(user_params)
            render json: { errors: @user.errors.full_messages },
                   status: :unprocessable_entity
        end
    end

    # DELETE /users/{username}
    def destroy
        @user.destroy
    end

    private

    def find_user
        @user = UserProfile.find_by_name!(params[:name])
    rescue ActiveRecord::RecordNotFound
        render json: { errors: 'User not found' }, status: :not_found
    end

    def user_params
        params.permit(
            :avatar, :name, :email, :password, :password_confirmation
        )
    end

    def user_profile_params
        params.permit(
            :name, :email
        )
    end
end
