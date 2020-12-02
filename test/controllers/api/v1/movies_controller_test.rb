require 'test_helper'

class Api::V1::MoviesControllerTest < ActionDispatch::IntegrationTest
  test "should GET index" do
    get api_v1_movies_index_url
    assert_response :success
  end

  test "should POST create" do
    get api_v1_movies_create_url
    assert_response :success
  end

  test "should GET show" do
    get api_v1_movies_show_url
    assert_response :success
  end

  test "should DELETE destroy" do
    get api_v1_movies_destroy_url
    assert_response :success
  end

end
