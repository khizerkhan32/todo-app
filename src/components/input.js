import React from 'react';

function input(props) {
  const { placeholder, value, onChange, onKeyDown } = props;
  return (
    <div style={{ width: '100%' }}>
      <input
        type="text"
        placeholder={placeholder}
        style={{ border: '1px solid #dcdcdc', height: 46, width: '90%' }}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={onKeyDown}
      ></input>
    </div>
  );
}

export default input;
