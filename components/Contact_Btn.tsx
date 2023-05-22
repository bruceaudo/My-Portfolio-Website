import React from "react";

type Contact_BtnProps = {
  handleClick: () => void;
};

const Contact_Btn: React.FC<Contact_BtnProps> = ({ handleClick }) => {
  return <button onClick={handleClick} className="mt-10 text-base">Contact me</button>;
};
export default Contact_Btn;
