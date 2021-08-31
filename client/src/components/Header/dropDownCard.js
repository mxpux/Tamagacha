import React from "react";
//SweetAlert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// const MySwal = withReactContent(Swal)

const liCls =
  "p-3 text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer";


  function DropDownCard({ data = [], setOpen, handlePageChange}) {


    const sweetAlertLogin = async () => {
      const sweetRespond = await Swal.fire({
        // const a = await Swal.fire({
        title: 'Login',
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

    const sweetAlertSignUp = async () => {
      const sweetRespond = await Swal.fire({
        // const a = await Swal.fire({
        title: 'Sign Up',
        html:
          '<input id="swal-input1" class="swal2-input">' +
          '<input type="password" id="swal-input2" class="swal2-input">',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: `Sign Up`,
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
            title: `${userInput[0]} Sign Up `,
            timer: 1500
          })
        }
      }

      //If cancel button click
      if(sweetRespond.isDismissed) {
        console.log('cancel button click')
      }
    }

    const renderSweetAlert = (item) => {
      if(item === 'Login') {
        return sweetAlertLogin()
      }
      if(item === 'Sign Up') {
        return sweetAlertSignUp()
      }
    }


    return (
      <div className="shadow h-auto w-auto" style={{backgroundColor: "white", position: "absolute", right: "0px"}}>
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

// const DropDownCard = ({ data = [], setOpen,handlePageChange }) => (
//   <div className="shadow h-auto w-auto" style={{backgroundColor: "white", position: "absolute", right: "0px"}}>
//     <ul className="text-center">
//       {data.map((item, i) => (
//         <li
//           key={i}
//           className={liCls}
//           onClick={() => {
//             setOpen(false)
//             handlePageChange(item)
//             sweetAlertTesting()
//             console.log('item', item)
//             }}>
//             <span>
//             {item}
//         </span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

export default DropDownCard;
