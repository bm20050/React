import Theader_1 from "./Theader_1";
import Tc1_1 from "./Tc1_1";
import Tc2_1 from "./Tc2_1";
import Tdetail_1 from "./Tdetail_1";
import { useState, useEffect } from "react";

const Taccidentm_1 = ({ c1, c2, data }) => {
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

export default Taccidentm_1;