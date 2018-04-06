class CreateClimates < ActiveRecord::Migration[5.1]
  def change
    create_table :climates do |t|
      t.string :city
      t.integer :temp
      t.string :status

      t.timestamps
    end
  end
end
