import React from 'react';

const AddUser = () => {

  // CRUD - Create/ Post operation
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    console.log(name, email, phone);

    const user = {
      name: name,
      email: email,
      phone: phone
    };

    fetch("https://crud-operation-project-back-end-server.vercel.app/users", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          alert(`${name} inserted successfully`);
        }
        form.reset();
      });
  }


  return (
    <div>
      <h1 className='text-2xl text-center my-5'>CRUD Operation: Add New User</h1>
      <div className="container mx-auto card bg-base-100 w-96 shadow-2xl">
        <form onSubmit={handleAddUser} className="card-body">
          <input type="text" name="name" placeholder="Insert your name" className="input input-bordered" required />
          <input type="email" name="email" placeholder="Insert your email-id" className="input input-bordered" required />
          <input type="number" name="phone" placeholder="Insert your pbone number" className="input input-bordered" required />
          <button type="submit" value="Add User" className="btn btn-primary">Add user</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;