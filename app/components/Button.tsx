import { useRef, useState } from "react";

export const Button = ({ text, type }: { text: string; type: string }) => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  if (type === "grey") {
    return (
      <button
        style={{
          borderRadius: "4px",
          border: "2px solid #BBC8D4",
          padding: "16px 22px",
          color: "#BBC8D4",
          backgroundColor: "transparent",
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
        }}
      >
        {text}
      </button>
    );
  } else if (type === "blog") {
    return (
      <button
        style={{
          borderRadius: "4px",
          border: "2px solid #5A4FF3",
          backgroundColor: "rgba(77, 160, 253, 0.10)",
          padding: "16px 20px",
          color: "#4DA0FD",
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
        }}
      >
        {text}
      </button>
    );
  } else if (type === "blue") {
    return (
      <button
        style={{
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#0bbef2",
          padding: "16px 20px",
          color: "white",
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
        }}
      >
        {text}
      </button>
    );
  } else if (type === "next") {
    // const handleHorizantalScroll = (
    //   element: { scrollLeft: number } | null,
    //   speed: number | undefined,
    //   distance: number,
    //   step: number
    // ) => {
    //   let scrollAmount = 0;
    //   const slideTimer = setInterval(() => {
    //     element.scrollLeft += step;
    //     scrollAmount += Math.abs(step);
    //     if (scrollAmount >= distance) {
    //       clearInterval(slideTimer);
    //     }
    //     if (element.scrollLeft === 0) {
    //       setArrowDisable(true);
    //     } else {
    //       setArrowDisable(false);
    //     }
    //   }, speed);
    // };
    return (
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          color: "#6D7D8B",
          textAlign: "center",
          width: "165px",
          height: "44px",
        }}
        // onClick={() => {
        //   handleHorizantalScroll(elementRef.current, 25, 100, 100);
        // }}
      >
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.5001 5.59221C7.1751 5.91721 7.1751 6.44221 7.5001 6.76721L10.7334 10.0005L7.5001 13.2339C7.1751 13.5589 7.1751 14.0839 7.5001 14.4089C7.8251 14.7339 8.3501 14.7339 8.6751 14.4089L12.5001 10.5839C12.8251 10.2589 12.8251 9.73388 12.5001 9.40888L8.6751 5.58388C8.35843 5.26721 7.8251 5.26721 7.5001 5.59221Z"
            fill="#6D7D8B"
          />
        </svg>
      </button>
    );
  }
  return (
    <button
      style={{
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#0bbef2",
        padding: "16px 20px",
        color: "white",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "24px",
      }}
    >
      Default
    </button>
  );
};
