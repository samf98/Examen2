module Api::V1
	class ClimatesController < ApplicationController
		def index
			@climates = Climate.order("created_at DESC")
			render json: @climates
		end

		def create
			@climate = Climate.create(climate_params)
			render json: @climate
		end

		    def update
      		@climate = Climate.find(params[:id])
      		@climate.update_attributes(climate_params)
      		render json: @idea
    	end

		private

		def climate_params
			params.require(:climate).permit(:city, :temp, :status)
		end
	end
end