import React, { useState } from 'react';
import './Restaurant.css';
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
    <div className='restaurant'>
      <h2>Restaurant Page</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <label>
          Food Name:
          <input type="text" name="name" value={name} onChange={(e) => onInputChange(e)} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" name="quantity" value={quantity} onChange={(e) => onInputChange(e)} />
        </label>
        <br />
        <label>
          Expiration Date:
          <input type="date" name="expiryDate" value={expiryDate} onChange={(e) => onInputChange(e)} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={description} onChange={(e) => onInputChange(e)} />
        </label>
        <br />
        <label>
          Restaurant ID:
          <input type="number" name='restaurantId' value={restaurantId} onChange={(e) => onInputChange(e)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Restaurant;
