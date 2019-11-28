class CommentsController < ApplicationController
    before_action :authorize_request
    before_action :find_post, only: :create
    before_action :find_comment, only: [:update, :delete]

    # Create a comment on a post
    def create
        comment = @post.comments.build(content: params[:content], user_profile_id: @current_user.id)
        if comment.save
            render json: comment, status: :ok
        else
            render json: { isOk: false }
        end
    end

    # Update comment content on a post
    def update
        if @current_user.comments.include?(@comment)
            @comment.update(content: params[:content])
            render json: @comment, status: :ok
        else
            render json: { isOk: false }, status: :not_found
        end
    end
       
    # Delete a comment on a post
    def delete
        if @current_user.comments.include?(@comment)
            @comment.destroy
            render json: { isOk: true }, status: :ok
        else
            render json: { isOk: false }, status: :not_found
        end
    end
    
    private
    def find_post
        @post = Post.find(params[:post_id])
    rescue ActiveRecord::RecordNotFound
        render json: { errors: 'Post not found' }, status: :not_found
    end

    def find_comment
        @comment = Comment.find(params[:comment_id])
    rescue ActiveRecord::RecordNotFound
        render json: { errors: 'Commnent not found' }, status: :not_found
    end
end
