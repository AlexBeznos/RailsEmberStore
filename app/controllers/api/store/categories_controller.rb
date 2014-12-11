module API
  module Store
    class CategoriesController < ApplicationController
  	  def index
        if params[:alias]
          @categories = Category.find_by(alias: params[:alias])
        else
          @categories = Category.all
        end

        render json: @categories
      end

      # GET /categories/1
      # GET /categories/1.json
      def show
        @category = Category.find(params[:id])
        render json: @category
      end
    end
  end
end