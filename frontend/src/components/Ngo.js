import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Ngo.css'

function NGO() {
  
  const [food, setFood] = useState([]);

  useEffect(()=>{
    loadFood();
  },[])

  const loadFood=async()=>{
    const result=await axios.get("http://localhost:8080/food");
    setFood(result.data);
  }

  const deleteFood = async (id)=>{
    await axios.delete(`http://localhost:8080/food/${id}`);
    alert("Food item ordered successfully.");
    loadFood();
  }

  

  return (
    <div className='ngo'>
      <h2>NGO Page</h2>
      <h3>Available Food from Restaurants</h3>
      <table className='table-container'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qunatity</th>
            <th>Expiry Date</th>
            <th>Description</th>
            <th>Restaurant ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            food.map((food,index)=>(
              <tr>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.expiryDate}</td>
                <td>{food.description}</td>
                <td>{food.restaurantId}</td>
                <td>
                  <button onClick={()=>deleteFood(food.id)}>Order</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default NGO;
