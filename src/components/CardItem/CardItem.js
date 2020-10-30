import React from 'react';
import {Card} from 'semantic-ui-react';

const CardItem = (props) => {
    const {planets} = props;
    return(
        <>
            {planets.map((item, i) => (
                <Card
                    key={i}
                    href='#card-example-link-card'
                    header={item.name}
                    meta={`${item.climate} climate`}
                    description={`${item.population} people on this planet`}
                />
            ))}
        </>
        )
};

export default CardItem;