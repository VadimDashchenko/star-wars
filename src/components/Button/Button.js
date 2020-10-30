import React from 'react'
import {Button} from 'semantic-ui-react'

const Buttons = (props) => {
    const {title, click} = props;
    return (
        <Button onClick={click} secondary>{title}</Button>
    )
}

export default Buttons;