class MovieSubtitle < ApplicationRecord
  belongs_to :movie
  belongs_to :subtitle

  validates :movie_id, uniqueness: { scope: :subtitle_id }
end
