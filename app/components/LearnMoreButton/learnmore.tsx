import { useRouter } from "next/navigation";

export const Learnmore = () => {
  const { push } = useRouter();

  return (
    <button
      style={{
        color: "var(--bluey, #4da0fd)",
        fontFamily: "'Mulish', sans-serif",
        fontSize: "16px",
        fontWeight: "350",
        lineHeight: "175.7%",
        textDecorationLine: "underline",
        border: "none",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => {
        push("/blog");
      }}
    >
      Learn More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.1188 11.0039H5.10876C4.55876 11.0039 4.10876 11.4539 4.10876 12.0039C4.10876 12.5539 4.55876 13.0039 5.10876 13.0039H16.1188V14.7939C16.1188 15.2439 16.6588 15.4639 16.9688 15.1439L19.7488 12.3539C19.9388 12.1539 19.9388 11.8439 19.7488 11.6439L16.9688 8.85392C16.6588 8.53392 16.1188 8.76392 16.1188 9.20392V11.0039Z"
          fill="#4DA0FD"
        />
      </svg>
    </button>
  );
};
