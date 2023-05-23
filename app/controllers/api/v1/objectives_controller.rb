class Api::V1::ObjectivesController < ApplicationController
  before_action :set_objective, only: %i[update destroy]
  def index
    @objectives = Objective.includes(%i[organization]).order('created_at DESC')
    if @objectives
      render json: @objectives, status: 200
    else
      render json: { error: 'No objectives found' }, status: 404
    end
  end

  def create
    @objective = Objective.new(objective_params)
    if @objective.save
      render json: @objective, status: 201
    else
      render json: { error: @objective.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    if @objective.update(objective_params)
      render json: @objective, status: 200
    else
      render json: { error: @objective.errors.full_messages.to_sentence }, status: 422
    end
  end

  def destroy
    if @objective.destroy
      render json: { message: 'Objective Successfully Deleted' }, status: 200
    else
      render json: { error: @objective.errors.full_messages.to_sentence}, status: 422
    end
  end

  private

  def set_objective
    @objective = Objective.find_by(id: params[:id])
  end

  def objective_params
    params.require(:objective).permit(%i[description organization_id])
  end
end
