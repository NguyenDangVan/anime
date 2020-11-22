class Movie < ApplicationRecord
	PARAMS_MOVIE = %i(title original_title movie_image movie_type
	 content status rating aried ended)

	# has_many :genres, through: :movie_genres

	enum movie_type: [:tv_series, :movie]
	enum satus: [:upcoming, :ongoing, :completed]

	validates :title, :movie_type, :status, presence: true
end
