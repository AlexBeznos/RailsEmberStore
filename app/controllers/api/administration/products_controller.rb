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

        # POST /Products
        # POST /Products.json
        def create
          if params[:images]
            Product.last.add_images(params[:images])
            render json: Product.last.images, status: :created
            return
          end

          if params[:categories]
            Product.last.add_categories(params[:categories])
            render json: Product.last.categories, status: :created
            return
          end

          if tl_params
            @product = Product.new(tl_params)
            if @product.save
              render json: @product, status: :created
            else
               render json: @product.errors, status: :unprocessable_entity
            end
          end
        end

        # PATCH/PUT /Products/1
        # PATCH/PUT /Products/1.json
        def update
          @product = Product.find(params[:id])

          if @product.update(tl_params)
            if params[:optional]
              @product.update_product(params[:optional])
            end
            head :no_content
          else
            render json: @product.errors, status: :unprocessable_entity
          end
        end

        # DELETE /Products/1
        # DELETE /Products/1.json
        def destroy
          @product = Product.find(params[:id])
          @product.delete_images
          @product.destroy

          head :no_content
        end
        private
        def tl_params
          params.require(:product).permit(:name, :price, :alias, :active_on_storage, :on_storage, :active, :position)
        end
    end
  end
end