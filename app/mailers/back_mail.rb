class BackMail < ActionMailer::Base
  default from: "rabby@rabby.com.ua"

  def back_message(data)
    @data = data
    mail(to: 'beznosa@yahoo.com', subject: @data["subject"])
  end
end