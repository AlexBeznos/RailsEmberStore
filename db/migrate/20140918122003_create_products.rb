class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.string :alias
      t.boolean :active_on_storage, :default => true
      t.integer :on_storage
      t.boolean :active, :default => true
      t.integer :position

      t.timestamps
    end
  end
end
