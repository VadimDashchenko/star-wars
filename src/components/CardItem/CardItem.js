import React from 'react';
import {Card} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './styles.scss';

const CardItem = (props) => {
    const {planets, getPlanet} = props;
    return(
        <>
            {planets.map((item, i) => (
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

export default CardItem;