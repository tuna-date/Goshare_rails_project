class FacebookAccount < ApplicationRecord
    has_one :user_profile, as: :account
end
