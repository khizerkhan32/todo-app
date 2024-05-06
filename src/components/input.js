import React from 'react';

function input(props) {
  const { placeholder } = props;
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        style={{ border: '1px solid #dcdcdc', height: 64, width: '457px' }}
      ></input>
    </div>
  );
}

export default input;
