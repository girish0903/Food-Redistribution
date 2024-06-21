// Import necessary dependencies and CSS
import React, { useState } from 'react';
import './Restaurant.css'; // Import the CSS file
import axios from 'axios';

function Restaurant() {
    const [food, setFood] = useState({
        name: "",
        quantity: "",
        expiryDate: "",
        description: "",
        restaurantId: "",
    });

    const { name, quantity, expiryDate, description, restaurantId } = food;

    const onInputChange = (e) => {
        setFood({ ...food, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // Basic validation to check if any field is left blank
        if (!name || !quantity || !expiryDate || !description || !restaurantId) {
            alert('Please fill out all fields.');
            return;
        }

        try {
            await axios.post(`http://localhost:8080/addFood`, food);
            alert('Food item added successfully');
            setFood({
                name: "",
                quantity: "",
                expiryDate: "",
                description: "",
                restaurantId: "",
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add food item. Please try again later.');
        }
    };

    return (
      <div className='bodyy'>
        <div className='restaurant'>
            <h2 className='restaurant-header'>Restaurant Page</h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                    <label>Food Name:</label>
                    <input type="text" name="name" value={name} onChange={(e) => onInputChange(e)} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Quantity:</label>
                    <input type="number" name="quantity" value={quantity} onChange={(e) => onInputChange(e)} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Expiration Date:</label>
                    <input type="date" name="expiryDate" value={expiryDate} onChange={(e) => onInputChange(e)} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Description:</label>
                    <textarea name="description" value={description} onChange={(e) => onInputChange(e)} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Restaurant ID:</label>
                    <input type="number" name='restaurantId' value={restaurantId} onChange={(e) => onInputChange(e)} className='form-control' />
                </div>
                <button type="submit" className='btn-submit'>Submit</button>
            </form>
        </div>
        </div>
    );
}

export default Restaurant;
