module Api
  module V1
    class BaseSerializer < Api::BaseSerializer
      set_key_transform :underscore
    end
  end
end