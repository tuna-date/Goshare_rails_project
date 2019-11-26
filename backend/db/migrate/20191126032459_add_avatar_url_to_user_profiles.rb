class AddAvatarUrlToUserProfiles < ActiveRecord::Migration[5.2]
  def change
    add_column :user_profiles, :avatar_url, :string
  end
end
