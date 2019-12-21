class UserProfilesController < ApplicationController
    before_action :authorize_request, except: :create
    before_action :find_user, except: %i[create index]

    def index
        @users = UserProfile.all
        render json: @users, status: :ok
    end

    # Show info of a user profile
    def show
        user_profile = {}
        user_profile["id"] = @user.id
        user_profile["name"] = @user.name
        user_profile["email"] = @user.email
        user_profile["avatar_url"] = @user.avatar_url
        user_profile["posts_count"] = @user.posts.count
        user_profile["following_count"] = @user.following.count
        user_profile["followers_count"] = @user.followers.count
        user_profile["is_following_by_current_user"] = @current_user.following.include?(@user)
        user_profile["posts"] = []
        sql = " SELECT * 
                FROM   posts
                WHERE  user_profile_id = '#{@user.id}'
                ORDER BY created_at DESC"
        posts = Post.paginate_by_sql(sql, page: params[:page], per_page: 5)
        posts.each do |post|
            profile_post = {}
            profile_post[:post_id] = post.id
            profile_post[:image_url] = post.image_url
            user_profile["posts"].push(profile_post)
        end
        render json: user_profile, status: :ok
    end

    # Return all user's following
    def show_following
        following = @user.following
        following_info = []
        following.each do |user|
            user_info = {}
            user_info[:id] = user.id
            user_info[:name] = user.name
            user_info[:avatar_url] = user.avatar_url
            following_info.push(user_info)
        end

        render json: following_info, status: :ok
    end

    # Return all user's followers
    def show_followers
        followers = @user.followers
        followers_info = []
        followers.each do |user|
            user_info = {}
            user_info[:id] = user.id
            user_info[:name] = user.name
            user_info[:avatar_url] = user.avatar_url
            followers_info.push(user_info)
        end

        render json: followers_info, status: :ok
    end

    # Create a user
    def create
        @user = UserAccount.new(user_params)
        if @user.save
            @user.create_user_profile(user_profile_params)
            render json: @user, status: :created
        else
            render json: { errors: @user.errors.full_messages },
            status: :unprocessable_entity
        end
    end

    def follow
        if @current_user.following.include?(@user)
            render json: { is_following_by_current_user: @current_user.following.include?(@user) }, status: :ok
        else
            @current_user.active_relationships.create(followed_id: @user.id)
            render json: { is_following_by_current_user: @current_user.following.include?(@user) }, status: :ok
        end
    end

    def unfollow
        if @current_user.following.include?(@user)
            @current_user.active_relationships.find_by(followed_id: @user.id).destroy
            render json: { is_following_by_current_user: @current_user.following.include?(@user) }, status: :ok
        else
            render json: { is_following_by_current_user: @current_user.following.include?(@user) }, status: :ok
        end
    end

    private

    def find_user
        @user = UserProfile.find(params[:user_id])
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
