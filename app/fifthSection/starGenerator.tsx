import { StarIcon } from "./starIcon";

export const StarGenerator = ({ count }: { count: number }) => {
  count = count > 5 ? 5 : count;
  count = count < 0 ? 0 : count;
  let arr = new Array(count).fill("");
  return (
    <div>
      {arr.map((_, index) => {
        return <StarIcon key={index} />;
      })}
    </div>
  );
};
