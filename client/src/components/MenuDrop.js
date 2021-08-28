import React from "react";
import Menu from "./Menu";
import DropDownCard from "./dropDownCard";
const sampleData = ["Login", "Characters", "My Tama"];

const ButtonWithDropDownCmp = (props) => {
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  function handleClick(e) {
    // if (!e.target.closest(`.${drop.current.className}`) && open) {
    //   setOpen(false);
    // }
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
      data={sampleData}
      setOpen={setOpen}
      handlePageChange={props.handlePageChange}
       />}
    </div>
  );
};

export default ButtonWithDropDownCmp;
