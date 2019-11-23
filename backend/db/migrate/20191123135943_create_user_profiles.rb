class CreateUserProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :user_profiles do |t|
      t.string :name
      t.string :email
      t.references :account, polymorphic: true

      t.timestamps
    end
  end
end
