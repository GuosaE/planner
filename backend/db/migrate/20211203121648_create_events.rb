class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :day
      t.string :location
      t.string :name
      t.string :importance
      t.string :category

      t.timestamps
    end
  end
end
