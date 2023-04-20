import React, { useState } from "react";

function BeerCard(props) {
    const [like, setLike] = useState(false)
    const { name, image_url, first_brewed, tagline, abv, description } = props;
    return (
        <li style={{ listStyle: 'none' }}>
            <img style={{ height: '200px' }} src={image_url}></img>
            <h3>{name}<span>{first_brewed}</span></h3>
            <button onClick={() => setLike((prevLike) => !prevLike)}>Like:{like ? '❤️' : '🤍'}</button>
            <h4>{tagline}</h4>
            <p><span>{abv}</span>{description}</p>
        </li>
    )
}

export default BeerCard;