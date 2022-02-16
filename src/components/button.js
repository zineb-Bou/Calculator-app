import { useState } from 'react';
function Button({ name, children, handleClick }) {
  const handleOnclick = () => {
    handleClick(children);
  };

  return (
    <button className={name} onClick={handleOnclick}>
      {children}
    </button>
  );
}

export default Button;
