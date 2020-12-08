class ChangePriceToBeStringInListings < ActiveRecord::Migration[6.0]
  def change
    change_column :listings, :price, :string
  end
end
