import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';

const Buttons = (props) => {
    const {title, click} = props;
    return (
        <Button onClick={click} secondary>{title}</Button>
    )
}

Buttons.propTypes = {
    title: PropTypes.string,
    click: PropTypes.func,
}

export default Buttons;