module API
  module Store
    class ProductsController < ApplicationController
      def index
        if params[:alias]
          @products = Category.find_by(alias: params[:alias]).products
        elsif params[:filter] == 'last'
          @products = Product.last(3)
        elsif params[:filter] == 'random'
          ids = Product.pluck(:id).shuffle[0..2] # postgresql Product.limit(3).order("RANDOM()")
          @products = Product.where(id: ids)
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