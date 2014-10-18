module API
  module Administration
    class ProductsController < ApplicationController
      def index
        @products = Product.all

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