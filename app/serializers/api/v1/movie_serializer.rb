module Api
  module V1
    class MovieSerializer < BaseSerializer
      set_id :object_id

      attributes :id, :title, :original_title, :movie_type, :status, :content

      attribute :image_url do |object|
      	object.image_url
      end
    end
  end
end
