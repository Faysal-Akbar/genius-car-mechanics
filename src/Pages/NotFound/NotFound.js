import React from 'react';
import notfound from '../../images/3828537.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{width: "600px"}} src={notfound} alt="" />
            <br />
            <button>Go Back</button>
        </div>
    );
};

export default NotFound;