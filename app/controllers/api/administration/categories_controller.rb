module API
  module Administration
    class CategoriesController < ApplicationController
    	 def index
          puts response.headers
          @categories = Category.all

          render json: @categories
        end

        # GET /categories/1
        # GET /categories/1.json
        def show
          @category = Category.find(params[:id])

          render json: @category
        end

        # POST /categories
        # POST /categories.json
        def create
          @category = Category.new(tl_params)

          if @category.save
            render json: @category, status: :created
          else
             render json: @category.errors, status: :unprocessable_entity
          end
        end

        # PATCH/PUT /categories/1
        # PATCH/PUT /categories/1.json
        def update
          @category = Category.find(params[:id])

          if @category.update(tl_params)
            head :no_content
          else
            render json: @category.errors, status: :unprocessable_entity
          end
        end

        # DELETE /categories/1
        # DELETE /categories/1.json
        def destroy
          @category = Category.find(params[:id])
          @category.destroy_subcategories
          @category.destroy

          head :no_content
        end
        
        private
        def tl_params
          params.require(:category).permit(:name, :alias, :position, :menu, :status, :parent_category_id)
        end
    end
  end
end