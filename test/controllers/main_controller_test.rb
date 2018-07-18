require 'test_helper'

class MainControllerTest < ActionDispatch::IntegrationTest
  test "should get webservice" do
    get main_webservice_url
    assert_response :success
  end

end
