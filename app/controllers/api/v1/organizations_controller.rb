class Api::V1::OrganizationsController < ApplicationController
  def index
    @Organizations = Organization.includes(%i[logo_attachment]).order('created_at DESC')
    if @Organizations
      render json: @Organizations, status: 200
    else
      render json: @Organizations.errors.full_messages.to_setence, status: 404
    end
  end

  def show
    @Organization = Organization.find(params[:id])
    if @Organization
      render json: @Organization, status: 200
    else
      render json: @Organization.errors.full_messages.to_setence, status: 422
    end
  end

  def create
    @Organization = Organization.new(organization_params)
    if @Organization.save!
      render json: @Organization, status: 201
    else
      render json: @Organization.errors.full_messages.to_setence, status: 422
    end
  end

  def destroy
    @Organization = Organization.find(params[:id])
    if @Organization.destroy
      render json: @Organization, status: 200
    else
      render json: @Organization.errors.full_messages.to_setence, status: 422
    end
  end

  def update
    @Organization = Organization.find(params[:id])
    if @Organization.update(organization_params)
      render json: @Organization, status: 200
    else
      render json: @Organization.errors.full_messages.to_setence, status: 422
    end
  end

  private

  def organization_params
    params.require(:organization).permit(:name, :logo, :mission, :vision )
  end
end

