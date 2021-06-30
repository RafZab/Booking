import React from 'react';
import style from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg'

function Hotel(props) {
    return (
        <div className={`${style.hotel} card`}>
            <div className="card-body">
                    <div className="row">
                    <div className="col-4">
                        <img
                            src={hotelImg}
                            alt=""
                            className="img-fluid img-thumbnail" />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <p className={style.title}>{props.name}</p>
                                <snap className="badge-light">{props.city}</snap>
                            </div>
                            <div className="col text-right">
                                <h5>Ocena: {props.rating}</h5>
                                <a href="#" className="btn btn-primary mt-2 px-5">Pokaż</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-12">
                        <p className={style.description}>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotel;