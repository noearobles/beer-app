import React, { useState } from "react";

function BeerCard(props) {
    const [like, setLike] = useState(false)
    const { name, image_url, first_brewed, tagline, abv, description } = props;
    return (
        <div className="Beer-Card">
            <li style={{ listStyle: 'none' }}>
                <img style={{ height: '200px' }} src={image_url} alt="beerImage"></img>
                <h3>{name}<span> {first_brewed}</span></h3>
                <h4>{tagline}</h4>
                <div className="stats"><p><span>{abv} </span>{description}</p>
                    <button onClick={() => setLike((prevLike) => !prevLike)}>Like:{like ? '❤️' : '🤍'}</button></div>
            </li></div>
    )
}
export default BeerCard;