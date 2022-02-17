import * as React from 'react';
import Toggle from './toggle_switch';

function Header(props) {
  const handleChange = (theme) => {
    props.handleChange(theme);
  };
  return (
    <div className="header">
      <h1 className="title">calc</h1>
      <Toggle handleChange={handleChange} />
    </div>
  );
}

export default Header;
