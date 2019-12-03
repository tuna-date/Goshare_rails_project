class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.belongs_to :user_profile
      t.string :content
      t.string :image_url
      t.string :location_lat
      t.string :location_lng

      t.timestamps
    end
  end
end
