class Post < ApplicationRecord
    belongs_to :user_profile
    has_many :comments, dependent: :destroy
    validates :content, presence: true, length: {maximum: 2048}
end
