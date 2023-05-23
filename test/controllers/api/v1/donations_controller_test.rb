require "test_helper"

class Api::V1::DonationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_donations_index_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_donations_show_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_donations_create_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_donations_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_donations_destroy_url
    assert_response :success
  end
end
