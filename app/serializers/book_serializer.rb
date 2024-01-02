class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :publisher, :genre, :slug

  attribute :average_score do |object|
    object.review.average(:score)
  end

  has_many :review
end