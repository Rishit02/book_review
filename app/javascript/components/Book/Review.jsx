import React from "react";

const Review = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.attributes.title}</h5>
                <p className="card-subtitle mb-2 text-body-secondary">Rating: {props.attributes.score}</p>
                <p className="card-text">{props.attributes.description}</p>
            </div>
        </div>
    )
}

export default Review