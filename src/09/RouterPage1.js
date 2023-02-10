import { useParams } from "react-router-dom";

const RouterPage1 = () => {
  const item = useParams().item;
  console.log(item);
  const fruits = ["사과", "바나나"];
  let tag;
  if (fruits.includes(item))
    tag = <p>{item}는 과일입니다.</p>
  else
    tag = <p>{item}는 과일이 아닙니다.</p>
  // let tag = fruits.includes(item) ? "과일입니다." : "과일이 아닙니다.";
  return (
    <>
      <h1>page1</h1>
      {tag}
      {/* <p>{`${item}는 ${tag}`}</p> */}
    </>
  );
}

export default RouterPage1;