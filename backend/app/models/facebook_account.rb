class FacebookAccount < ApplicationRecord
    has_one :user_profile, as: :account
    validates :facebook_id, presence: true, uniqueness: true
end
