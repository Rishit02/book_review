require 'faker'

Book.destroy_all
Review.destroy_all

5.times do
    book = Book.create(
        title: Faker::Book.unique.title,
        author:  Faker::Book.unique.author, 
        publisher: Faker::Book.unique.publisher,
        genre: Faker::Book.unique.genre
    )
    5.times do
        title = "My review"
        description = "It is an okay read"
        score = Faker::Number.within(range: 1..5)
        book.review.create(
            title: title, 
            description: description, 
            score: score, 
        )
    end
end