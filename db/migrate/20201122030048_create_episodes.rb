class CreateEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :episodes, options: "ROW_FORMAT=COMPRESSED" do |t|
      t.references :movie, null: false, foreign_key: true
      t.integer :number_ep, null: false
      t.string :title
      t.text :videoURL

      t.timestamps
    end
  end
end
