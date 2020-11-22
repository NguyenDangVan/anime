class CreateMovieGenres < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_genres, options: "ROW_FORMAT=COMPRESSED" do |t|
      t.references :movies, null: false, foreign_key: true
      t.references :genres, null: false, foreign_key: true

      t.timestamps
    end
  end
end
