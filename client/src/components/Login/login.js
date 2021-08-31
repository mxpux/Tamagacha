import React, { useState } from 'react';
import './login.css';
import Swal from 'sweetalert2'

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
  };

  const sweetAlertTesting = async () => {
    const sweetRespond = await Swal.fire({
      // const a = await Swal.fire({
      title: 'Username & Password',
      html:
        '<input id="swal-input1" class="swal2-input">' +
        '<input type="password" id="swal-input2" class="swal2-input">',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: `Login`,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      },
      allowOutsideClick: false,
    })

    var userInput = sweetRespond.value

    // Sign in button clicked
    if (sweetRespond.isConfirmed) {

      //if either username or password are empty
      if(userInput[0] === '' || userInput[1] === '') {
        // Return SweetAlert Error
        Swal.fire({
          icon: 'error',
          title: `Invalid Input`,
          timer: 1500
        })
      } else {
        //We got username and password
        console.log('userinput Array--->', userInput)
        //Need to check username and password from database..........

        Swal.fire({
          icon: 'success',
          title: `Welcome Back ${userInput[0]}`,
          timer: 1500
        })
      }
    }

    //If cancel button click
    if(sweetRespond.isDismissed) {
      console.log('cancel button click')
    }

  }

  return (
    <div>
      <p>
        Hello {firstName} {lastName}
      </p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
