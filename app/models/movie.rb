class Movie < ApplicationRecord
	PARAMS_MOVIE = %i(title original_title movie_image movie_type
	 content status rating aried ended)

	has_many :movie_genres, dependent: :destroy
	has_many :genres, through: :movie_genres
	has_many :movie_subtitles, dependent: :destroy
	has_many :subtitles, through: :movie_subtitles

	enum movie_type: [:tv_series, :movie]
	enum satus: [:upcoming, :ongoing, :completed]

	validates :title, :movie_type, :status, presence: true
end
