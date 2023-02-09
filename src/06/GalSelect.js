import data from '../db/data.json'
import './Gal.css'
import Galcontent from './Galcontent'
import { useState, useRef, useEffect } from 'react'
const GalSelect = () => {
  // 데이터 가져오기
  const items = data.response.body.items.item;
  const category = items.map((item) => item.galTitle)
  console.log(category);

  const optionTag = category.map((i) => <option key={i} value={i}>{i}</option>);
  
  // select box 제어
  const selR = useRef();

  const [selOption, setSelOption] = useState({});
  // 컴포넌트 처음 랜더링이 일어났을 때
  useEffect(() => {
    selR.current.focus();
  }, []);

  const handleSel = (e) => {
    e.preventDefault();
    setSelOption(items.filter((item) => item.galTitle === selR.current.value)[0]);
  }
  return (
    <>
      <form>
        <select ref={selR} name="sel1" onClick={handleSel}>
          {/* <option value=""></option> */}
          {optionTag}
        </select>
      </form>
      {Object.keys(selOption).length > 0 && <Galcontent selContent={selOption} />}
    </>

  );
}

export default GalSelect;