class PostsController < ApplicationController
    before_action :authorize_request
    # Show all post in new feed
    def index
        @posts = Post.paginate(page: newfeed_params[:page], per_page: 10).order('created_at DESC')
        posts_info = []
        @posts.each do |post|
            post_info = {}
            post_info[:id] = post[:id]
            post_info[:content] = post[:content]
            post_info[:image_url] = post[:image_url]
            post_info[:location_tag] = post[:location_tag]
            post_info[:total_comments] = post.comments.count
            nearest_comments = post.comments.limit(5).order('created_at desc')
            post_info[:nearest_comments] = []
            nearest_comments.each do |comment|
                cmt = {}
                cmt[:user_name] = comment.user_profile.name
                cmt[:content] = comment.content
                post_info[:nearest_comments].push(cmt)
            end
            post_info[:user] = { name: post.user_profile.name, 
                                 user_profile_id: post.user_profile.id, 
                                 user_profile_avatar_url: post.user_profile.avatar_url }
            post_info[:created_at] = post.created_at

            posts_info.push(post_info)
        end
        render json: posts_info, status: :ok
    end

    def create
        post = @current_user.posts.build(content: params[:content], 
                                        image_url: params[:image_url], 
                                        location_tag: params[:location_tag])
        if post.save
            render json: post, status: :ok
        else
            render json: { isOk: false }, status: :not_found
        end
    end

    # post detail 
    def show
        @post = Post.find(post_detail_params[:post_id])
        post_info = {}
        post_info[:id] = @post[:id]
        post_info[:content] = @post[:content]
        post_info[:image_url] = @post[:image_url]
        post_info[:location_tag] = @post[:location_tag]
        post_info[:total_comments] = @post.comments.count
        nearest_comments = @post.comments.order('created_at desc')
        post_info[:all_comments] = []
        nearest_comments.each do |comment|
            cmt = {}
            cmt[:user_info] = { user_id: comment.user_profile.id,
                                name: comment.user_profile.name,
                                avatar_url: comment.user_profile.avatar_url }
            cmt[:content] = comment.content
            post_info[:all_comments].push(cmt)
        end
        post_info[:user] = { name: @post.user_profile.name, 
                             user_profile_id: @post.user_profile.id, 
                             user_profile_avatar_url: @post.user_profile.avatar_url }
        post_info[:created_at] = @post.created_at
        render json: post_info, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: { errors: 'Post not found' }, status: :not_found
    end

    private

    def newfeed_params
        params.permit(:page)
    end

    def post_detail_params
        params.permit(:post_id)
    end
end
