module API
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

      # POST /images
      # POST /images.json
      def create
        @image = Image.new(tl_params)

        if @image.save
          render json: @image, status: :created
        else
           render json: @image.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /images/1
      # PATCH/PUT /images/1.json
      def update
        @image = Image.find(params[:id])

        if @image.update(tl_params)
          head :no_content
        else
          render json: @image.errors, status: :unprocessable_entity
        end
      end

      # DELETE /images/1
      # DELETE /images/1.json
      def destroy
        @image = Image.find(params[:id])
        @image.destroy

        head :no_content
      end
      private
      def tl_params
        params.require(:image).permit(:name)
      end
  end
end