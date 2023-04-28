/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import './Card.css';

export default props =>{

    const cardSyle = {
        backgroundColor: props.cor,
        borderColor: props.cor
    }

    return(
        <div className='Card' style={cardSyle}>
            <div className='Tittle'>
                {props.titulo}
            </div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}