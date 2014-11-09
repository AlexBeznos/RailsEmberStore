module API
  module Administration
    class OrdersController < ApplicationController
    	 def index
          if params[:status]
            @orders = Order.where(status: params[:status])
          else
            @orders = Order.all
          end
          
          render json: @orders
        end

        # GET /Orders/1
        # GET /Orders/1.json
        def show
          @order = Order.find(params[:id])

          render json: @order
        end

        # POST /Orders
        # POST /Orders.json
        def create
          @order = Order.new(tl_params)

          if @order.save
            if params[:product]
            	@order.create_order(params[:product])
            end
            render json: @order, status: :created
          else
             render json: @order.errors, status: :unprocessable_entity
          end
        end

        # PATCH/PUT /Orders/1
        # PATCH/PUT /Orders/1.json
        def update
          @order = Order.find(params[:id])

          if @order.update(tl_params)
            head :no_content
          else
            render json: @order.errors, status: :unprocessable_entity
          end
        end

        # DELETE /Orders/1
        # DELETE /Orders/1.json
        def destroy
          @order = Order.find(params[:id])
          @order.destroy

          head :no_content
        end
        private
        def tl_params
          params.require(:order).permit(:phone, :addres, :name, :sum)
        end
    end
  end
end