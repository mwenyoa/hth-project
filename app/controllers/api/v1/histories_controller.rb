class Api::V1::HistoriesController < ApplicationController
  before_action :set_history, only: %i[destroy update]
  before_action :set_organization, only: %i[index show]
  def index
    @histories = History.includes(%i[image_attachment organization]).order('event_date ASC')
    if @histories
      render json: @histories, status: 200
    else
      render json: { error: histories.errors.full_messages_to.sentence }, status: 404
    end
  end

  def show
    @history = History.includes(%i[image_attachment organization]).find_by(id: params[:id])
    if @history
      render json: @history, status: 200
    else
      render json: { error: 'History not found' }, status: 404
    end
  end

  def create
    @history = History.new(histories_params)
    if @history.save
      render json: @history, status: 201
    else
      render json: { error: @history.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    if @history.update(histories_params)
      render json: { message: 'history ssuccessfully updated', history: @history }, status: 200
    else
      render json: { error: @history.errors.full_messages_to.sentence }, status: 422
    end
  end

  def destroy
    if @history.destroy
      render json: { message: 'History successfully deleted' }, status: 200
    else
      render json: @history.errors.full_messages.to_sentence, status: 422
    end
  end

  private

  def set_organization
    @organization = Organization.find_by(id: params[:organization_id])
  end

  def set_history
    set_organization
    if @organization
      @history = @organization.histories.find_by(id: params[:id])
    else
      render json: { error: 'Organization not found' }, status: 404 unless @organization
    end
  end

  def histories_params
    params.require(:history).permit(%i[event_title event_date link description])
  end
end
