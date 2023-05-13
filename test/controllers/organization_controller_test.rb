require "test_helper"

class OrganizationControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get organization_index_url
    assert_response :success
  end

  test "should get show" do
    get organization_show_url
    assert_response :success
  end

  test "should get create" do
    get organization_create_url
    assert_response :success
  end

  test "should get destroy" do
    get organization_destroy_url
    assert_response :success
  end

  test "should get update" do
    get organization_update_url
    assert_response :success
  end
end
