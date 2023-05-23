class Api::V1::WorksController < ApplicationController
  before_action :set_work, only: %i[update destroy]
  def index
    @reports = Work.includes(%i[organization work_image_attachment]).order('created_at DESC')
    if @reports
      render json: @reports, status: 200
    else
      render json: { error: 'Works not found' }, status: 404
    end
  end

  def show
    @work = Work.includes(%i[organization work_image_attachment]).find_by(id: params[:id])
    if @work
      render json: @work, status: 200
    else
      render json: { error: 'Work not found' }, status: 404
    end
  end

  def create
    @work = Work.new(work_params)
    if @work.save
      render json: @work, status: 201
    else
      render json: { error: @work.errors.full_messages.to_sentence}, status: 422
    end
  end

  def update
    if @work.update(work_params)
      render json: @work, status: 200
    else
      render json: { error: @work.errors.full_messages.to_sentence}, status: 422
    end
  end

  def destroy
    if @work.destroy
      render json: { message: 'Work deleted Successfully' }, status: 200
    else
      render json: { error: @work.errors.full_messages.to_sentence}, status: 422
    end
  end

  private

  def set_work
    @work = Work.find_by(id: params[:id])
  end

  def work_params
    params.require(:work).permit(%i[name description work_date video_url organization_id work_image])
  end
end


