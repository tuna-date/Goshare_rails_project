class CreateFacebookAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :facebook_accounts do |t|
      t.string :facebook_id

      t.timestamps
    end
  end
end
