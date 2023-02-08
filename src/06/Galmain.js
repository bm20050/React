import Galmenu from "./Galmenu";
import Galcontent from "./Galcontent";
import { useState, useEffect } from "react";

const Galmain = ({title, data1}) => {
  let [selTitle, setSelTitle] = useState();
  let [selContent, setSelContent] = useState();
  
  useEffect (() => {
    if (selTitle) {
      setSelContent(data1.filter((i) => i["galTitle"] === selTitle)[0])
    }
  }, [selTitle]);
  
  return (
    <div className="galmain">
      <Galmenu title={title} selTitle={selTitle} setSelTitle={setSelTitle}/>
      {selContent && <Galcontent selContent={selContent}/>}
    </div>
  );
}

export default Galmain;