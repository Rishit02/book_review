module Api
    module V1
        class ReviewController < ApplicationController
            protect_from_forgery with: :null_session
            
            def create
                r = Review.new(review_params)
                if r.save
                    render json: serialize(r), staus: :created
                else
                    render json: errors(r), status: 422
                end
            end
            def destroy
                r = reviews.find_by(id: params[:id])

                if r.destroy
                    head :no_content
                else
                    render json: errors(r), status: 422
                end
            end

            private
            def reviews
                @reviews = Review.all
            end

            def review
                @review = Review.find_by(id: params[:id])
            end

            def review_params
                params.require(:review).permit(:title, :description, :score, :book_id)
            end

            def errors(records)
                { errors: records.errors.messages }
            end

            def serialize(s, options={})
                ReviewSerializer.new(s, options).serialized_json
            end
        end
    end
end
