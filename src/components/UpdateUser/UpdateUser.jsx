import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {

  const storedUser = useLoaderData();

  const [user, setUser] = useState(storedUser);

  const handleUpdateUser = (event) => {
    event.preventDefault()

    // whom should we Update, what to Update, method of Update //
    fetch(`https://crud-operation-project-back-end-server.vercel.app/users/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          alert("User data updated successfully");
        }
      })

  }


  // Get value by onChange function
  const handleOnChange = event => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    console.log(field, value);
    console.log(newUser);
  }

  // const handleAddUser = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const phone = form.phone.value;

  //   console.log(name, email, phone);

  //   const user = {
  //     name: name,
  //     email: email,
  //     phone: phone
  //   };
  // };

  return (
    <div>
      <h1 className='text-2xl text-center my-5'>CRUD Operation: Update Existing User: "{storedUser.name}"</h1>
      <div className="container mx-auto card bg-base-100 w-96 shadow-2xl">
        <form onSubmit={handleUpdateUser} className="card-body">
          <input onChange={handleOnChange} type="text" defaultValue={storedUser.name} name="name" placeholder="Insert your name" className="input input-bordered" required />
          <input onChange={handleOnChange} type="email" defaultValue={storedUser.email} name="email" placeholder="Insert your email-id" className="input input-bordered" required />
          <input onChange={handleOnChange} type="number" defaultValue={storedUser.phone} name="phone" placeholder="Insert your pbone number" className="input input-bordered" required />
          <button type="submit" value="Add User" className="btn btn-primary">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;