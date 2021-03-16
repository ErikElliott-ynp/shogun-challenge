class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.string :property_type
      t.string :address, null: false
      t.string :city
      t.string :postal_code
      t.integer :square_feet
      t.integer :price
      t.integer :beds
      t.float :baths
      t.string :url
      t.string :state

      t.timestamps
    end
    add_index :properties, :address, unique: true
  end
end
