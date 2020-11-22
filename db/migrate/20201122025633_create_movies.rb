class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies, options: "ROW_FORMAT=COMPRESSED" do |t|
      t.string :title, default: "", null: false
      t.string :original_title
      t.string :movie_image
      t.integer :movie_type, null: false
      t.text :content
      t.integer :status, null: false
      t.integer :rating
      t.datetime :aried
      t.datetime :ended

      t.timestamps
    end
    add_index :movies, :title
    add_index :movies, :movie_type
  end
end
