class UserProfile < ApplicationRecord
    belongs_to :account, polymorphic: true
end
