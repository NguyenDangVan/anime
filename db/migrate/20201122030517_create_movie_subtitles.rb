class CreateMovieSubtitles < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_subtitles, options: "ROW_FORMAT=COMPRESSED" do |t|
      t.references :movies, null: false, foreign_key: true
      t.references :subtitles, null: false, foreign_key: true

      t.timestamps
    end
  end
end
