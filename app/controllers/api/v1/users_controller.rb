class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]
  def index
    @users = User.includes(%i[picture_attachment]).order('created_at DESC')
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
      render json: { error: 'user not found' }, status: 404
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: 201
    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: 422
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
      render json: { message: 'User Deleted Successfully' }, status: 200
    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(%i[firstname lastname email password_digest dob city country nationality phoneno
                                    usertype organization_id picture])
  end
end
