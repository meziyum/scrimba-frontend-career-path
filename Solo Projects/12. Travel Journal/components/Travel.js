
import React from "react";

export default function Travel(props){
    return(
        <div className="location">
            <img src={props.imageUrl}/>
            <div>
                <div className="hero">
                    <p className="location-name">{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl} className="view">View on Google Maps</a>
                </div>
                <p className="title">{props.title}</p>
                <p className="date">{props.startDate}-{props.endDate}</p>
                <p className="desc">{props.description}</p>
            </div>
        </div>
    )
}