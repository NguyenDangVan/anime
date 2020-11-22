class Subtitle < ApplicationRecord
	has_many :movie_subtitles, dependent: :destroy
	has_many :movies, through: :movie_subtitles

	validates :language, presence: true, uniqueness: true
end
