import React from "react";
//SweetAlert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// const MySwal = withReactContent(Swal)

const liCls =
  "p-3 text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer";


  function DropDownCard({ data = [], setOpen, handlePageChange}) {


    const sweetAlertTesting = async () => {
      const { value: formValues } = await Swal.fire({
        title: 'Username & Password',
        html:
          '<input id="swal-input1" class="swal2-input">' +
          '<input type="password" id="swal-input2" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        },

      })
      if (formValues[0] === '' || formValues[1] === '') {
        Swal.fire({
          icon: 'error',
          title: `Invalid Input`,
          timer: 1500
        })
        //User input value are here!!!!!!!!
      } else {
        const userInputValue = formValues
        console.log('userInput', userInputValue)
        Swal.fire({
          icon: 'success',
          title: `Welcome Back ${userInputValue[0]}`,
          timer: 1500
        })
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
              // handlePageChange(item)
              sweetAlertTesting()
              console.log('item', item)
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
