import Image from "next/image";

export const WrittenBy = ({ pic, name }: { pic: string; name: string }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        paddingTop: "56px",
        justifyContent: "start",
        width: "700px",
      }}
    >
      <Image src={pic} alt="Avatar pic" width={56} height={56} />
      <div>
        <p
          style={{
            fontFamily: "'Mulish', sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "150%",
            color: "#1E2742",
          }}
        >
          Written By
        </p>
        <p
          style={{
            fontFamily: "'Mulish', sans-serif",
            fontSize: "24px",
            fontWeight: "500",
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#25313C",
          }}
        >
          {name}
        </p>
        <p
          style={{
            paddingTop: "8px",
            fontFamily: "'Mulish', sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "150%",
            color: "#989898",
          }}
        >
          CEO Team App
        </p>
      </div>
    </div>
  );
};
