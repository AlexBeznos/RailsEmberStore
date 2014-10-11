class AddTokenToSession < ActiveRecord::Migration
  def change
    add_column :admins, :login_token, :string
  end
end
