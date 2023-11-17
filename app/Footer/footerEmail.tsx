import { styled } from "@mui/material";

const MyEmail = styled("input")({
  width: "257px",
  border: "none",
  backgroundColor: "white",
  fontFamily: "'Mulish', sans-serif",
  fontSize: "16px",
  fontWeight: "500",
  padding: "14px 0 13px 16px",
});
const MyButton = styled("button")({
  backgroundColor: "white",
  border: "none",
  paddingRight: "3px",
  zIndex: "1",
});

function handleClick() {
  alert("Clicked1");
}

export const FooterEmail = () => {
  return (
    <div style={{ display: "flex" }}>
      <MyEmail placeholder="Email" />
      <style>
        {` 
                    ::placeholder { 
                        color: #4DA0FD; 
                    }`}
      </style>
      <MyButton onClick={handleClick}>
        <svg
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.68125 16.2499H27.2979L19.1646 22.3499C18.5146 22.8374 18.5146 23.6374 19.1646 24.1249C19.8146 24.6124 20.8646 24.6124 21.5146 24.1249L32.4979 15.8874C33.1479 15.3999 33.1479 14.6124 32.4979 14.1249L21.5312 5.87488C21.2199 5.64082 20.7971 5.50928 20.3562 5.50928C19.9154 5.50928 19.4926 5.64082 19.1812 5.87488C18.5312 6.36238 18.5312 7.14988 19.1812 7.63738L27.2979 13.7499H8.68125C7.76458 13.7499 7.01458 14.3124 7.01458 14.9999C7.01458 15.6874 7.76458 16.2499 8.68125 16.2499Z"
            fill="#4DA0FD"
          />
        </svg> 
      </MyButton>
    </div>
  );
};
