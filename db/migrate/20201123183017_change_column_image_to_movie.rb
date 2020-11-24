class ChangeColumnImageToMovie < ActiveRecord::Migration[6.0]
  def change
  	rename_column :movies, :movie_image, :image_data
  	change_column :movies, :image_data, :text
  end
end
