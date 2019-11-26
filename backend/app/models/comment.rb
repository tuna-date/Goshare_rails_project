class Comment < ApplicationRecord
    belongs_to :post
    belongs_to :user_profile
    validates :content, presence: true, length: {maximum: 2048}
end
