import React from 'react';

const Expert = (props) => {
    const {name, salary, rule, img} = props.expert;
    return (
        <div className="col-lg-4">
            <img style={{width:"400px"}} src={img} alt="" />
            <h3>Name : {name}</h3>
            <h5>Position : {rule}</h5>
            <h5>Salary : ${salary}</h5>
        </div>
    );
};

export default Expert;