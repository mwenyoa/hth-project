require "test_helper"

class Api::V1::BudgetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_budgets_index_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_budgets_show_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_budgets_create_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_budgets_update_url
    assert_response :success
  end
end
