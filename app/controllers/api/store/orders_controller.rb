module API
  module Store
    class OrdersController < ApplicationController
    	 def index
          @orders = Order.all

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

        private
        def tl_params
          params.require(:order).permit(:phone, :addres, :name, :sum)
        end
    end
  end
end