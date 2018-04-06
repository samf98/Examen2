module Api::V1
	class ClimatesController < ApplicationController
		def index
			@climates = Climate.all
			render json: @climates
		end

		def create
			@climates = Climate.create(climate_params)
			render json: @climate
		end

		private

		def climate_params
			params.require(:climate).permit(:city,:temp,:status)
		end
	end
end