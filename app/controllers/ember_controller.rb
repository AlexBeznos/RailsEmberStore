class EmberController < ApplicationController
  def index
  end

  def administration
  	render layout: 'admin'
  end

  def change_settings
  	hash = YAML.load(File.read(Rails.root + "/config/settings.yml"))
  	path = Rails.root + '/config/settings.yml'
  	File.open(path, 'w') {|f| f.write hash.to_yaml }
  end
end
