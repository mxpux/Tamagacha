import React from "react";
//SweetAlert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// const MySwal = withReactContent(Swal)
import { loginUser, createUser, getAllUser } from "../../utils/API";
import Auth from '../../utils/auth'

const liCls =
  "p-3 text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer";


  function DropDownCard({ data = [], setOpen, handlePageChange}) {

    const getAllUserEmail = async (userInputEmail) => {
      let response = await getAllUser()
      let data = await response.json()
      // console.log('data-----All User data-------->', data)
      for(var i = 0; i < data.length; i++) {
        if(userInputEmail === data[i].email) {
          return true;
        }
      }
      return false;
    }
    const validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

    const sweetAlertLogin = async () => {
      const sweetRespond = await Swal.fire({
        // const a = await Swal.fire({
        title: 'Login',
        html:
          '<input placeholder="Username" id="swal-input1" class="swal2-input">' +
          '<input placeholder="Password" type="password" id="swal-input2" class="swal2-input">',
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

          })
        } else {
          //We got username and password
          // console.log('userinput Array--->', userInput)
          //Need to check username and password from database..........
          try { //!LOGIN TRY CATCH
            const response = await loginUser(
              { username: userInput[0], password: userInput[1] }
            )
            if (!response.ok) {
              throw new Error('Something went wrong!')
            };

            const {token, userData } = await response.json();
            // console.log('response.json() userData login', userData);
            Auth.login(token, userData.id);
            console.log('before sweetalert welcone back')
            await Swal.fire({
              icon: 'success',
              title: `Welcome Back ${userInput[0]}`,
              // timer: 1500
            })
            console.log('after sweetalert welcone back')
            handlePageChange('My Tama')
          } catch (err) {
            console.error(err)
            Swal.fire({
              icon: 'error',
              title: `Something wrong with logging in`,
              // timer: 1500
            })
          }
        }
      }

      //If cancel button click
      if(sweetRespond.isDismissed) {
        // console.log('cancel button click')
      }
    }

    const sweetAlertSignUp = async () => {
      const sweetRespond = await Swal.fire({
        title: 'Sign Up',
        html:
          '<input placeholder="Username" type="user" id="swal-input1" class="swal2-input">' +
          '<input placeholder="Email" type="email" id="swal-input2" class="swal2-input">' +
          '<input placeholder="Password" type="password" id="swal-input3" class="swal2-input">',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: `Sign Up`,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
          ]
        },
        allowOutsideClick: false,
      })

      var userInput = sweetRespond.value

      // Sign in button clicked
      if (sweetRespond.isConfirmed) {

        //if username/email/password are empty
        if(userInput[0] === '' || userInput[1] === '' || userInput[2] === '') {
          // Return SweetAlert - All Fields are Required!
          await Swal.fire({
            icon: 'error',
            title: `All Fields are Required!`,
            timer: 1500
          })
          //if invalid email
        } else if (!validateEmail(userInput[1])) {
          await Swal.fire({
            icon: 'error',
            title: `Invalid Email!`,
            timer: 1500
          })
          //if password is less then 6 characters
        } else if (userInput[2].length < 6) {
          await Swal.fire({
            icon: 'error',
            title: `Password must be at least 6 characters!`,
            timer: 1500
          })
        } else if(await getAllUserEmail(userInput[1])) {
          console.log('hahahahaha', await getAllUserEmail(userInput[1]))
          await Swal.fire({
            icon: 'error',
            title: `The Email address is already in use!`,
            timer: 1500
          })
        }
        else {
          //We got username and password
          console.log('userinput Array--->', userInput)
          //Need to check username and password from database..........
          try { //!SIGNUP TRY CATCH
            const response = await createUser(
              { username: userInput[0], email: userInput[1], password: userInput[2]}
            );

            if (!response.ok) {
              throw new Error("Something went wrong!");
            }

            const { token, userData } = await response.json();
            // console.log('response.json() userData signup', userData)
            Auth.login(token, userData.id);

            await Swal.fire({
              icon: 'success',
              title: `${userInput[0]} Sign Up `,
              // timer: 1500
            })
          } catch (err) {
            console.error(err)
            await Swal.fire({
              icon: 'error',
              title: `Something wrong with logging in`,
              // timer: 1500
            })
          }

        }
      }

      //If cancel button click
      if(sweetRespond.isDismissed) {
        // console.log('cancel button click')
      }
    }

    const renderSweetAlert = (item) => {
      if(item === 'Login') {
        return sweetAlertLogin()
      }
      if(item === 'Sign Up') {
        return sweetAlertSignUp()
      }
      if (item ==='Sign Out') {
        Auth.logout()
      }
    }


    return (
      <div className="shadow h-auto" style={{backgroundColor: "white", position: "absolute", right: "0px", width: "175px", paddingTop: "10px"}}>
      <ul className="text-center">
        {data.map((item, i) => (
          <li
            key={i}
            className={liCls}
            onClick={() => {
              setOpen(false)
              renderSweetAlert(item)
              handlePageChange(item)
              }}>
              <span>
              {item}
          </span>
          </li>
        ))}
      </ul>
    </div>
    )
  }



export default DropDownCard;
