class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[update destroy]
  # before_action :require_admin

  def index
    @users = User.includes(%i[photo_attachment]).order(created_at: :desc)
    if @users
      render json: @users, status: 200
    else
      render json: { error: 'No users found' }, status: 404
    end
  end

  def show
    if @user
      render json: @user, status: 200
    else
      render json: { error: 'User not found' }, status: 404
    end
  end

  def update
    if @user.update(user_params)
      render json: @user, status: 200
    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  def destroy
    if @user.destroy
      render json: { message: 'Account Deleted Successfully' }, status: 200
    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(%i[firstname lastname email password photo])
  end

  def set_user
    @user = User.find_by(id: params[:id])
  end

  def require_admin
    render json: { error: 'Unauthorized Action!' }, status: :unauthorized unless current_user&.is_admin
  end
end
