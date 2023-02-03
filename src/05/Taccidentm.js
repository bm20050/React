import Theader from "./Theader";
import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import Tdetail from "./Tdetail";
import { useState, useEffect } from "react";

const Taccidentm = ({ c1, c2, data }) => {
  console.log(c1);
  
  let [c2d, setC2d] = useState();
  let [data1, setData1] = useState();
  return (
    <>
      <div className="tcontent">
        <div className="theader">
          <Theader />
        </div>
        <div className="tmain">
          <Tc1 c1={c1} c2={c2} setC2d={setC2d}/>
          {c2d && <Tc2 c2d={c2d} data={data} setData1={setData1}/>}
          {data1 && <Tdetail data1={data1}/>}
        </div>
      </div>
    </>
  );
}

export default Taccidentm;