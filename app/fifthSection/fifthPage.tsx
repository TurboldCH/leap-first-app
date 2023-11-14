import { Review } from "./review";
import { StarGenerator } from "./starGenerator";

const header_style = {
  fontFamily: "'Mulish', sans-serif",
  fontSize: "48px",
  fontWeight: "800",
  display: "flex",
  justifyContent: "center",
  paddingBottom: "120px",
};
const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#f5f7fa",
  height: "100vh",
  overflowX: "hidden",
};
const review_style = {
  width: "100vw",
  height: "374px",
  gap: "40px",
  display: "flex",
  overflowX: "auto",
  overflowY: "hidden",
  boxShadow: "20px 20px 50px grey",
  paddingLeft: "140px",
};
const icon = {
  paddingTop: "62px",
  paddingRight: "140px",
  display: "flex",
  justifyContent: "flex-end",
};
export const FifthPage = () => {
  const reviews = [
    {
      url: "/amy.png",
      name: "Amy Klassen",
      content:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      count: 5,
    },
    {
      url: "/jane.png",
      name: "Jane Cooper",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      count: 5,
    },
    {
      url: "/eleanor.png",
      name: "Eleanor Pena",
      content:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
      count: 5,
    },
    {
      url: "/klassen.png",
      name: "Amy Klassen",
      content:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      count: 5,
    },
    {
      url: "/amy.png",
      name: "Amy Klassen",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      count: 5,
    },
  ];
  return (
    <div style={style}>
      <h1 style={header_style}>What people say about us</h1>
      <div style={review_style}>
        {reviews.map((value, index) => {
          return (
            <Review
              count={value.count}
              name={value.name}
              profileURL={value.url}
              content={value.content}
              key={index}
            />
          );
        })}
      </div>
      <div style={icon}>
        <svg
          width="103"
          height="30"
          viewBox="0 0 103 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M71.6813 16.25H90.2979L82.1646 22.35C81.5146 22.8375 81.5146 23.6375 82.1646 24.125C82.8146 24.6125 83.8646 24.6125 84.5146 24.125L95.4979 15.8875C96.1479 15.4 96.1479 14.6125 95.4979 14.125L84.5312 5.87499C84.2199 5.64093 83.7971 5.50938 83.3563 5.50938C82.9154 5.50938 82.4926 5.64093 82.1813 5.87499C81.5313 6.36249 81.5313 7.14999 82.1813 7.63749L90.2979 13.75H71.6813C70.7646 13.75 70.0146 14.3125 70.0146 15C70.0146 15.6875 70.7646 16.25 71.6813 16.25Z"
            fill="#4DA0FD"
          />
          <path
            d="M31.3188 13.7562H12.7021L20.8354 7.65624C21.4854 7.16874 21.4854 6.36874 20.8354 5.88124C20.524 5.64717 20.1013 5.51563 19.6604 5.51563C19.2196 5.51563 18.7968 5.64717 18.4854 5.88124L7.50208 14.1187C6.85208 14.6062 6.85208 15.3937 7.50208 15.8812L18.4854 24.1187C19.1354 24.6062 20.1854 24.6062 20.8354 24.1187C21.4854 23.6312 21.4854 22.8437 20.8354 22.3562L12.7021 16.2562H31.3188C32.2354 16.2562 32.9854 15.6937 32.9854 15.0062C32.9854 14.3187 32.2354 13.7562 31.3188 13.7562Z"
            fill="#DADADA"
          />
        </svg>
      </div>
    </div>
  );
};
