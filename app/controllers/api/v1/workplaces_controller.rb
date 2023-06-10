class Api::V1::WorkplacesController < ApplicationController
  before_action :set_workplace, only: %i[update destroy]
  def index
    @workplaces = Workplace.includes(%i[organization workplace_images_attachments]).order(created_at: :desc)
    if @workplaces
      render json: @workplaces, status: 200
    else
      render json: { error: 'No workplaces found' }, status: 404
    end
  end

  def show
    @workplace = Workplace.includes(%i[organization workplace_images_attachments]).find_by(id: params[:id])
    if @workplace
      render json: @workplace, status: 200
    else
      render json: { error: 'No workplace found' }, status: 404
    end
  end

  def create
    @workplace = Workplace.new(workplace_params.except(:workplace_images))
    workplace_images = params[:workplace][:workplace_images]
    if workplace_images
      workplace_images.each do |image|
        @workplace.workplace_images.attach(image)
      end
    end
    if @workplace.save
      render json: @workplace, status: 201
    else
      render json: { error: @workplace.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    if @workplace.update(workplace_params)
      render json: @workplace, status: 200
    else
      render json: { error: @workplace.errors.full_messages.to_sentence }, status: 422
    end
  end

  def destroy
    if @workplace.destroy
      render json: { msg: 'Work place deleted Successfully' }, status: 200
    else
      render json: { error: @workplace.errors.full_messages.to_sentence }
    end
  end

  private

  def set_workplace
    @workplace = Workplace.find_by(id: params[:id])
  end

  def workplace_params
    params.require(:workplace).permit(%i[name description organization_id quicknote workplace_images: []])
  end
end
