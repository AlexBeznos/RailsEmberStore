class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :phone
      t.string :addres
      t.string :name
      t.decimal :sum

      t.timestamps
    end
  end
end
