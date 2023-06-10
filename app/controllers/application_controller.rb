class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def login?
    current_user.present?
  end
end
