class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.belongs_to :post
      t.belongs_to :user_profile
      t.string :content

      t.timestamps
    end
  end
end
