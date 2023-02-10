import Wheader from './Wheader';
import { useParams } from "react-router-dom";
import item from '../db/item.json'
import weather2 from '../db/weather2.json'
const W1 = () => {
  // console.log(weather2)

  let keys;
  keys = item;
  let items = weather2.response.body.items.item;
  let w2 = items.map((i) => {
    let temp = [];
    temp.push(keys[i.category]);
    temp.push(i.obsrValue);
    // temp.push(keys[i.category])
    return temp;
  });
  console.log(w2)
  
  return (
    <>
      <Wheader title={'날씨예보 - 단기예보'} />
      <div className="w1">
        <div>
          <span className='sp0'></span>
          <span className='sp1'></span>
          <span className='sp2'></span>
        </div>
      </div>
    </>
  );
}

export default W1;