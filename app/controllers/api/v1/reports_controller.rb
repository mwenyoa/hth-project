class Api::V1::ReportsController < ApplicationController
  before_action :set_report, only: %i[update destroy]
  def index
    @reports = Report.includes(%i[organization report_file_attachment]).order('created_at DESC')
    if @reports
      render json: @reports, status: 200
    else
      render json: { error: 'No Reports found' }, status: 404
    end
  end

  def show
    @report = Report.includes(%i[organization report_file_attachment]).find_by(id: params[:id])
    if @report
      render json: @report, status: 200
    else
      render json: { error: 'Report not found' }, status: 422
    end
  end

  def create
    @report = Report.new(report_params)
    if @report.save
      render json: @report, status: 201
    else
      render json: { error: @report.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    if @report.update!(report_params)
      render json: @report, status: 200
    else
      render json: { error: @report.errors.full_messages.to_sentence }, status: 422
    end
  end

  def destroy
    if @report.destroy
      render json: { message: 'Report deleted successfully' }, status: 200
    else
      render json: { error: @report.errors.full_messages.to_sentence }, status: 422
    end
  end

  private

  def set_report
    @report = Report.find_by(id: params[:id])
  end

  def report_params
    params.require(:report).permit(%i[id name description repotype organization_id report_file])
  end
end
