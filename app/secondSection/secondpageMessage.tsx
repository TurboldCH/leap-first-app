import Image from "next/image";

const style = {
    width: "100%",
    height: "100%",
}

export const SecondpageMessage = () => {
  return (
    <div style={style}>
      <Image
        src="/messageBox.png"
        alt="Message Box"
        width={1321}
        height={723}
        style={{position: "absolute", top: 166, left: 833}}
      />
    </div>
  );
};
