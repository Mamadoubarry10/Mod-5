class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :img1
      t.string :img2
      t.string :img3
      t.integer :price
      t.integer :acres
      t.string :location
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
