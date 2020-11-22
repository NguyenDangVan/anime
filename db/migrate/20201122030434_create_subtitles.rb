class CreateSubtitles < ActiveRecord::Migration[6.0]
  def change
    create_table :subtitles, options: "ROW_FORMAT=COMPRESSED" do |t|
      t.string :language

      t.timestamps
    end
    add_index :subtitles, :language
  end
end
