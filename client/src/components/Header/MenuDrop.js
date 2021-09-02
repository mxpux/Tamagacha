import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import DropDownCard from "./dropDownCard";
import Auth from "../../utils/auth"
const menuData = ["Login", "Sign Up", "Characters", "My Tama"];

const MenuDrop = (props) => {
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  const [menuItem, setMenuItem] = useState(menuData)

  useEffect(() => {
    setMenuItemFunction()
  }, [])

  const setMenuItemFunction = () => {
    const userSignOut = ["Login", "Sign Up", "Characters"];
    const userSignIn = ["Profile", "My Tama", "Characters", "Sign Out"]
    if(Auth.loggedIn()) { //user is sign in
      setMenuItem(userSignIn)
    } else { //if user is not login
      setMenuItem(userSignOut)
    }


  }
  function handleClick(e) {

  }
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div
      className="dropdown"
      ref={drop}
      style={{
        margin: "16px",
        width: "auto"
      }}
    >
      <Menu onClick={() => setOpen(open => !open)} />
      {open && <DropDownCard
      data={menuItem}
      setOpen={setOpen}
      handlePageChange={props.handlePageChange}
       />}
    </div>
  );
};

export default MenuDrop;
