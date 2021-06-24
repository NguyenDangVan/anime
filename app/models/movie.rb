class Movie < ApplicationRecord
	include ImageUploader::Attachment(:image)

	PARAMS_MOVIE = %i(title original_title image movie_type
	 content status rating aried ended)

	has_many :movie_genres, dependent: :destroy
	has_many :genres, through: :movie_genres
	has_many :movie_subtitles, dependent: :destroy
	has_many :subtitles, through: :movie_subtitles
	has_many :episodes

	enum movie_type: [:tv_series, :movie]
	enum status: [:upcoming, :ongoing, :completed]

	validates :title, :movie_type, :status, presence: true
end
