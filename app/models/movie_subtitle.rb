class MovieSubtitle < ApplicationRecord
  belongs_to :movie
  belongs_to :subtitle
end
