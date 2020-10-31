import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './styles.scss';

const CardItem = (props) => {
    const {planets, getPlanet} = props;
    return(
        <>
            {planets.map((item, i) => (
                item.name !== 'unknown' &&
                <Link key={i} to={`/planet/${item.name}`} onClick={() => getPlanet(item)}>
                    <Card
                        className="card-item"
                        link
                        key={i}
                        header={item.name}
                        meta={`climate: ${item.climate}`}
                        description={`population: ${item.population === 'unknown' ? 0 : item.population}`}
                    />
                </Link>
            ))}
        </>
        )
};

CardItem.propTypes = {
    planets: PropTypes.array,
    getPlanet: PropTypes.func,
}

export default CardItem;