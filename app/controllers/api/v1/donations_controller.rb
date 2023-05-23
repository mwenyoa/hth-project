class Api::V1::DonationsController < ApplicationController
  before_action :set_donation, only: %i[show udpate destroy]
  def index
    @donations = Donation.includes(%i[user organization]).order(created_at: :desc)
    if @donations
      render json: @donations, status: 200
    else
      render json: { error: 'No donations found' }, status: 404
    end
  end

  def show
    if @donation
      render json: @donation, status: 200
    else
      render json: { error: 'Donation was not found' }, status: 404
    end
  end

  def create
    @donation = Donation.new(donations_params)
    if @donation.save
      render json: @donation, status: 201
    else
      render json: { error: @donation.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    if @donation.update!(donations_params)
      render json: @donation, status: 200
    else
      render json: { error: @donation.errors.full_messages.to_sentence}, status: 422
    end
  end

  def destroy
    if @donation.destroy
      render json: { message: 'user deleted successfully' }, status: 200
    else
      render json: { error: @donation.errors.full_messages.to_sentence}, status: 422
    end
  end

  private

  def set_donation
    @donation = Donation.find_by(id: params[:id])
  end

  def donations_params
    params.require(:donation).permit(%i[amount purpose user_id organization_id])
  end
end
