import React from 'react';
import './styles.scss';

const DetailPlanet = (props) => {
    const {planet, residents} = props;
    return (
        <div className="detail">
            <ul>
                <li><strong>Name: </strong> {planet.name}</li>
                <li><strong>Rotation period: </strong> {planet.rotation_period}</li>
                <li><strong>Diameter: </strong> {planet.diameter}</li>
                <li><strong>Climate: </strong> {planet.climate}</li>
                <li><strong>Gravity: </strong> {planet.gravity}</li>
                <li><strong>Type of territory: </strong> {planet.terrain}</li>
                <li><strong>Population: </strong> {planet.population === 'unknown' ? 0 : planet.population}</li>
                <li><strong>Residents: </strong>
                    {residents.length === 0
                        ?
                        <span>no residents</span>
                        :
                        <select name="" id="">
                            {residents.map((item, i) => (
                                <option key={i}>{item.name}</option>
                            ))}
                        </select>
                    }
                </li>
            </ul>
        </div>
    )
}

export default DetailPlanet;