module Api
    module V1
        class BookController < ApplicationController
            protect_from_forgery with: :null_session

            # /book
            def index
                render json: serialize(books, options)
            end
            # /book
            def show
                render json: serialize(book, options)
            end
            def create
                book = Book.new(book_params)
                if book.save
                    render json: serialize(book), status: :created
                else
                    render json: errors(book), status: 422
                end
            end
            def update
                book = Book.find_by(slug: params[:slug])
                if book.update(book_params)
                    render json: serialize(book)
                else
                    render json: errors(book), staus:422
                end
            end
            def destroy
                book = Book.find_by(slug: params[:slug])
                if book.destroy
                    head :no_content
                else
                    render json: errors(book), status: 422
                end
            end

            private
            def books
                @books = Book.all
            end
            def book
                @book = Book.find_by(slug: params[:slug])
            end
            def options
                @options ||= { include: %i[review] }
            end
            def book_params
                params.require(:book).permit(:title, :author, :publisher, :genre)
            end
            def errors(record)
                { errors: record.errors.messages }
            end
            def serialize(s, options={})
                BookSerializer.new(s, options).serialized_json
            end
        end
    end
end