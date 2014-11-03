module API
  module Store
    class ProductsController < ApplicationController
      def index
        if params[:alias]
          @products = Category.find_by(alias: params[:alias]).products
        else
          @products = Product.all
        end


        render json: @products
      end

      # GET /Products/1
      # GET /Products/1.json
      def show
        @product = Product.find(params[:id])

        render json: @product
      end
    end
  end
end