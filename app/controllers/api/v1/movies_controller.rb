class Api::V1::MoviesController < ApplicationController
	before_action :load_movie, only: %i(show destroy)

	def index
		movies = Movie.all.limit(6).order created_at: :desc

		resource = Api::V1::MovieSerializer.new(movies).serializable_hash

    response = resource[:data].map{|object| object[:attributes]}

  	render json: response
	end

	def create
  	movie = Movie.create! movie_params

  	if movie
  		render json: movie
  	else
  		render json: movie.errors
  	end
  end

	def show
  	if @movie
      resource = Api::V1::MovieSerializer.new(@movie).serializable_hash

      response = resource[:data][:attributes]

  		render json: response
  	else
  		render json: @movie.errors
  	end
  end

  def destroy
  	@movie&.destroy
  	render json: { message: "Movie is deleted!" }
  end

  private
    def load_movie
    	@movie ||= Movie.find_by id: params[:id]
    end

    def movie_params
    	params.permit Movie::PARAMS_MOVIE
  	end
end
