import React, { useState } from "react";

function BeerCard(props) {
    const cardStyle = {
        display: 'flex',
        flexDirection: 'row'
    }
    const [like, setLike] = useState(false)
    const { name, image_url, first_brewed, tagline, abv, description } = props;
    return (
        <div style={cardStyle}>
            <img style={{ height: '200px' }} src={image_url}></img>
            <li style={{ listStyle: 'none' }}>
                <h3>{name}<span> {first_brewed}</span></h3>
                <h4>{tagline}</h4>
                <button onClick={() => setLike((prevLike) => !prevLike)}>Like:{like ? '❤️' : '🤍'}</button>
                <p><span>{abv}</span>{description}</p>
            </li></div>
    )
}

export default BeerCard;