import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, price, img, description} = props.service;
    return (
        <div className="single-service">
            <img style={{width:"400px", height: "350px"}} src={img} alt="" />
            <h3>Name : {name}</h3>
            <h5>Price : {price}</h5>
            <h6>{description}</h6>
        </div>
    );
};

export default Service;