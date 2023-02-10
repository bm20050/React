import { useLocation } from 'react-router-dom';
import qs from 'query-string'

const RouterPage2 = () => {
  let location = useLocation().search;
  console.log(location);
  let item = qs.parse(location).item;
  console.log(item);
  
  const fruits = ["사과", "바나나"];
  let tag;
  if (fruits.includes(item))
    tag = <p>{item}는 과일입니다.</p>
  else
    tag = <p>{item}는 과일이 아닙니다.</p>
  
  return (
    <>
      <h1>page2</h1>
      {tag}
    </>
  );
}

export default RouterPage2;