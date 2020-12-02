class CreateGenres < ActiveRecord::Migration[6.0]
  def change
    create_table :genres, options: "ROW_FORMAT=COMPRESSED" do |t|
      t.string :name, default: "", null: false
      t.text :description

      t.timestamps
    end
    add_index :genres, :name
  end
end
