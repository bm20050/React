import Wheader from './Wheader';
import keys from '../db/item.json';
import weather2 from '../db/weather2.json';
import { useState, useEffect } from 'react';

const W1 = () => {
  // state 변수
  const [items, setItems] = useState();
  const [itemTag, setItemTag] = useState();

  // useEffect
  // 랜더링이 발생될 때마다 실행
  // useEffect(() => {})

  // 맨 처음 컴포넌트 랜더링 시 실행
  useEffect(() => {
    setItems(weather2.response.body.items.item);
  }, []);

  // 특정 state 변수 변경 시 실행
  useEffect(() => {
    if (!items) return;
    let temp = items.map((i, n) =>
      <div className="w1" key={"w1" + n}>
        <span className='sp0'>{keys[i.category][0]}</span>
        <span className='sp1'>{i.obsrValue}</span>
        <span className='sp2'>{keys[i.category][1]}</span>
      </div>
    );
    setItemTag(temp);
  }, [items]);

  return (
    <>
      <Wheader title={'날씨예보 - 단기예보'} />
      {items && itemTag}
    </>
  );
}

export default W1;