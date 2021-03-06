import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleDeleteService = (id) => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert("Successfully Deleted");
                const remainingServices = services.filter(service => service._id !== id);
                setServices(remainingServices);
            }
        })
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div 
                        key={service._id}
                    ><h4>{service.name}</h4>
                    <button onClick={()=> handleDeleteService(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;