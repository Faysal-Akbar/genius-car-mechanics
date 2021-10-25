import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id, name, price, img, description} = props.service;
    return (
        <div className="single-service">
            <img style={{width:"400px", height: "350px"}} src={img} alt="" />
            <h3>Name : {name}</h3>
            <h5>Price : {price}</h5>
            <h6>{description}</h6>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-danger text-white fw-bold">Book {name}</button>
            </Link>
        </div>
    );
};

export default Service;