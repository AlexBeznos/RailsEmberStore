class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :name
      t.string :alias
      t.integer :position
      t.integer :menu
      t.boolean :status, :default => true
      t.references :parent_category

      t.timestamps
    end
  end
end
