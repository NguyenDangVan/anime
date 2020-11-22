class MovieSubtitle < ApplicationRecord
  belongs_to :movies
  belongs_to :subtitles
end
