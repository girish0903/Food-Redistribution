import React, { useState, useEffect } from 'react';
import { getUsersByRole } from './UserService';

const UserList = () => {
  const [ngoUsers, setNgoUsers] = useState([]);
  const [restaurantUsers, setRestaurantUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ngoUsersData = await getUsersByRole('ngo');
        setNgoUsers(ngoUsersData);

        const restaurantUsersData = await getUsersByRole('restaurant');
        setRestaurantUsers(restaurantUsersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []); // Fetch data once on component mount

  return (
    <div>
      <h2>NGOs</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th> {/* Assuming you have added address and contact number to User entity */}
          </tr>
        </thead>
        <tbody>
          {ngoUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Restaurants</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {restaurantUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
