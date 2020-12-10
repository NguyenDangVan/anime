module FastJsonapi
  module CustomSerializer
    extend ActiveSupport::Concern

    class_methods do
      def related_to(relation, **options)
        serializer = options.delete :serializer

        attribute relation do |object|
          relation_object = object.public_send relation
          serializer.new(relation_object, options).serializable_hash
        end
      end

      def map_attribute(attribute, original_attribute)
        attribute attribute do |object|
          object.public_send original_attribute
        end
      end
    end

    def serializable_hash
      if is_collection?(@resource, @is_collection)
        super[:data].map { |object| object[:attributes] }
      else
        super.dig :data, :attributes
      end
    end

    delegate :to_json, :as_json, to: :serializable_hash
  end
end
