class CommentsController < ApplicationController
    before_action :authorize_request
    before_action :find_post
    def create
        comment = @post.comments.build(content: params[:content], user_profile_id: @current_user.id)
        if comment.save
            render json: comment, status: :ok
        else
            render json: { isOk: false }
        end
    end

    private
    def find_post
        @post = Post.find(params[:post_id])
    rescue ActiveRecord::RecordNotFound
        render json: { errors: 'Post not found' }, status: :not_found
    end
end
