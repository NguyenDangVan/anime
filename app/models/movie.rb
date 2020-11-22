class Movie < ApplicationRecord
	enum movie_type: [:tv_series, :movie]
	enum satus: [:upcoming, :ongoing, :completed]

	validates :title, :movie_type, :status, presence: true
end
