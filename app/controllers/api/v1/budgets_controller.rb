class Api::V1::BudgetsController < ApplicationController
  before_action :set_budget, only: %i[update destroy]
  def index
    @budgets = Budget.includes(%i[budget_file_attachment organization]).order(created_at: :desc)
    if @budgets
      render json: @budgets, status: :ok
    else
      render json: { error: 'not_found' }, status: 404
    end
  end

  def show
    @budget = Budget.includes(%i[budget_file_attachment organization]).find_by(id: params[:id])
    if @budget
      render json: @budget, status: 200
    else
      render json: { error: 'not_found' }, status: 404
    end
  end

  def create
    @budget = Budget.new(budget_params)
    if @budget.save!
      render json: @budget, status: 201
    else
      render json: { error: @budget.errors.full_message.to_senetnce }, status: 422
    end
  end

  def update
    if @budget.update!(budget_params)
      render json: @budget, status: 200
    else
      render json: { error: @budget.errors.full_message.to_senetnce }, status: 422
    end
  end

  def destroy
    if @budget.destroy!
      render json: { message: 'Budget deleted' }, status: 200
    else
      render json: { error: @budget.errors.full_message.to_senetnce }, status: 422
    end
  end

  private

  def set_budget
    @budget = Budget.find_by(id: params[:id])
  end

  def budget_params
    params.require(:budget).permit(:name, :amount, :description, :startperiod, :endperiod, :organization_id,
                                   :budget_file)
  end
end
