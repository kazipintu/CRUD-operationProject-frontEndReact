import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

  const users = useLoaderData();

  const [displayUsers, setDisplayUsers] = useState(users)

  const handleDeleteUser = (user) => {
    console.log("handle delete user by click ?");

    const agree = window.confirm(`Do you want to delete the user "${user.name}" ?`);
    console.log(agree);

    if (agree) {
      console.log('deleted user by click', user._id);
      // const url = `https://crud-operation-project-back-end-server.vercel.app/users/${user._id}`;
      // fetch(url);
      fetch(`https://crud-operation-project-back-end-server.vercel.app/users/${user._id}`, {
        method: "DELETE",
      })
        .then(response => response.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert(`"${user.name}" has been deleted successfully`);
            const remainingUser = displayUsers.filter(usr => usr._id !== user._id);
            setDisplayUsers(remainingUser);
          }
        })
    }
  }

  return (
    <div>
      <h1 className='text-2xl text-center my-5'>All Users, Total : {users.length}</h1>
      <div className='container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4' >
        {
          displayUsers?.map(user => (
            <div key={user._id} className="card bg-base-100 image-full w-96 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1482961674540-0b0e8363a005?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Man" />
              </figure>
              <div className="card-body">
                <p>ID: {user?._id}</p>
                <h2 className="card-title">Name: {user.name}</h2>
                <p>E-mail: {user.email}</p>
                <p>Phone Number: {user.phone}</p>
                <div className="card-actions justify-between mt-10">
                  <button onClick={() => handleDeleteUser(user)} className="btn btn-error text-white">Delete User</button>
                  <Link to={`/update-user/${user._id}`} className="btn btn-success text-white">Update User</Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Users;