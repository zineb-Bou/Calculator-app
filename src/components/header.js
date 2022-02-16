import * as React from 'react';
import Toggle from './toggle_switch';


function Header() {
  return (
    <div className="header">
      <h1 className="title">calc</h1>
      <Toggle />
    </div>
  );
}

export default Header;
