class BookSerializer
  include FastJsonapi::ObjectSerializer

  has_many :review

  attributes :title, :author, :publisher, :genre, :slug
  
  attribute :average_score do |object|
    object.review.average(:score).to_f.round(1)
  end

end