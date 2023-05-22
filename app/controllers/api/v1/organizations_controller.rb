class Api::V1::OrganizationsController < ApplicationController
  before_action :set_organization, only: %i[show update destroy]
  def index
    @Organizations = Organization.includes(%i[logo_attachment]).order('created_at DESC')
    if @Organizations
      render json: @Organizations, status: 200
    else
      render json: @Organizations.errors.full_messages.to_setence, status: 404
    end
  end

  def show
    if @organization
      render json: @organization, status: 200
    else
      render json: { error: @organization.errors.full_messages.to_sentence }, status: 422
    end
  end

  def create
    @organization = Organization.new(organization_params)
    if @organization.save!
      render json: @organization, status: 201
    else
      render json: { error: @organization.errors.full_messages.to_sentence }, status: 422
    end
  end

  def destroy
    if @organization.destroy
      render json: @organization, status: 200
    else
      render json: @organization.errors.full_messages.to_sentence, status: 422
    end
  end

  def update
    if @organization.update(organization_params)
      render json: @organization, status: 200
    else
      render json: @organization.errors.full_messages.to_sentence, status: 422
    end
  end

  private

  def set_organization
    @organization = Organization.find_by(id: params[:id])
  end

  def organization_params
    params.require(:organization).permit(:name, :logo, :mission, :vision)
  end
end
