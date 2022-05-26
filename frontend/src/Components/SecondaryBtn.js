import React from "react";

const SecondaryBtn = ({ Type, Value, Fn }) => {
  return (
    <button type={Type} className='btn_custom' onClick={Fn}>
      {Value}
    </button>
  );
};

export default SecondaryBtn;
