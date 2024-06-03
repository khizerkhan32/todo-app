function Button(props) {
  const { children, width, onclick, background } = props;
  return (
    <button
      style={{
        border: 'none',
        width: width,
        borderRadius: '4px',
        background: background,
        height: 46,
        color: 'white',
      }}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default Button;
