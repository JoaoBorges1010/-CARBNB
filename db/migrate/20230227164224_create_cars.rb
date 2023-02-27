class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :brand, null: false, default: ""
      t.string :model, null: false, default: ""
      t.string :fuel_type
      t.string :type, null: false, default: ""
      t.string :location
      t.integer :year
      t.integer :space_available, null: false, default: ""
      t.float :price_per_day
      t.boolean :car_available, default: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
