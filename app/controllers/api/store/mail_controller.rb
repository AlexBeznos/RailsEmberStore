module API
  module Store
    class MailController < ApplicationController
      def post
        if params["mail"]
          BackMail.back_message(params["mail"]).deliver
          render json: {success: "Success!"}, status: 202
        else 
          render json: {error: 'Something happend'}, status: 400
        end
      end
    end
  end
end