class RenameTypeToCategoryInCars < ActiveRecord::Migration[7.0]
  def change
    rename_column :cars, :type, :category
  end
end
