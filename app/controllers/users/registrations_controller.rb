# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :update_allowed_parameters, if: :devise_controller?

  respond_to :json

  private

  def respond_with(resource, _opts = {})
    resource.persisted? ? register_success : register_failed
  end

  def register_success
    yield resource if block_given?
    confirmation_email = UserMailer.confirmation_email(resource)
    confirmation_email.deliver_now
    render json: resource, status: 200
  end

  def register_failed
    render json: resource.errors.full_messages.to_sentence, status: 401
  end

  def update_allowed_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |u|
      u.permit(:firstname, :lastname, :email, :password, :role, :photo)
    end
  end
end
