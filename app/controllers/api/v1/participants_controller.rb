class Api::V1::ParticipantsController < ApplicationController
  before_action :set_participant, only: %i[show update destroy]
  def index
    @participants = Participant.includes(%i[picture_attachment]).order('created_at DESC')
    if @participants
      render json: @participants, status: 200
    else
      render json: { error: 'No participants found' }, status: 404
    end
  end

  def show
    if @participant
      render json: @participant, status: 200
    else
      render json: { error: 'participant not found' }, status: 404
    end
  end

  def create
    @participant = Participant.new(participant_params)
    if @participant.save
      render json: @participant, status: 201
    else
      render json: { error: @participant.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    if @participant.update(participant_params)
      render json: @participant, status: 200
    else
      render json: { error: @participant.errors.full_messages.to_sentence }, status: 422
    end
  end

  def destroy
    if @participant.destroy
      render json: { message: 'participant Deleted Successfully' }, status: 200
    else
      render json: { error: @participant.errors.full_messages.to_sentence }, status: 422
    end
  end

  private

  def set_participant
    @participant = participant.find_by(id: params[:id])
  end

  def participant_params
    params.require(:participant).permit(%i[firstname lastname email dob city country nationality phoneno
                                           usertype organization_id occupation picture ])
  end
end
