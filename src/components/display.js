import { useState } from 'react';

function Display({ listChar }) {
  return (
    <div className="screen">
      <div>{listChar}</div>
    </div>
  );
}

export default Display;
