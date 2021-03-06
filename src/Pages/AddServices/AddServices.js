import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('http://localhost:5000/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Successfully Added');
                reset();
            }
        })
    };
    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name"/>
                <textarea {...register("description")} placeholder="In brief:"/>
                <input type="number" {...register("price")} placeholder="Price"/>
                <input {...register("img")} placeholder="Image URL"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;