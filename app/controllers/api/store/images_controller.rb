module API
  module Store
    class ImagesController < ApplicationController
  	  def index
        @images = Image.all

        render json: @images
      end

      # GET /images/1
      # GET /images/1.json
      def show
        @image = Image.find(params[:id])

        render json: @image
      end
    end
  end
end