import React, { Component } from 'react';
import Hotel from './Hotel/Hotel';
import style from './Hotels.module.css';
import PropTypes from 'prop-types';

const propTypes = {
    hotels: PropTypes.array.isRequired
}

class Hotels extends Component{
    render() {
        return (
            <div className={style.container}>
                <h2 className={style.title}>Oferty:</h2>
                {this.props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel}/>)}
            </div>
        );
    }
}

Hotels.propTypes = propTypes;

export default Hotels;