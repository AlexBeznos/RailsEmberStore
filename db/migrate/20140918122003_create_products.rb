class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :category_id
      t.decimal :price
      t.string :alias
      t.boolean :active_on_storage
      t.integer :on_storage
      t.boolean :active
      t.integer :position

      t.timestamps
    end
  end
end
