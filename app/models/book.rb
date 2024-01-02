class Book < ApplicationRecord
    has_many :review, dependent: :destroy

    before_create :slugify

    def slugify
        self.slug = title.parameterize
    end
end
