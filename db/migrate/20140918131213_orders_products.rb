class OrdersProducts < ActiveRecord::Migration
  def change
  	create_table :orders_products do |t|
      t.integer :product_id
      t.integer :order_id
    end
  end
end
