const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "3px",
};

export const Facebook = () => {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M15.1167 0H0.883333C0.395833 0 0 0.395833 0 0.883333V15.1167C0 15.6042 0.395833 16 0.883333 16H8V9.66667H6.0875V7.33333H8V5.60833C8 3.54167 9.43333 2.41667 11.2792 2.41667C12.1625 2.41667 13.1125 2.48333 13.3333 2.5125V4.67083H11.8625C10.8583 4.67083 10.6667 5.14583 10.6667 5.84583V7.33333H13.0583L12.7458 9.66667H10.6667V16H15.1167C15.6042 16 16 15.6042 16 15.1167V0.883333C16 0.395833 15.6042 0 15.1167 0Z"
          fill="white"
        />
      </svg>
      <p>Facebook</p>
    </div>
  );
};