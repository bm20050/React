import Mydiv11 from "./Mydiv11";
import { useEffect, useState } from "react";

const Mydiv1 = (probs) => {
  const user = probs.user;
  let n = probs.n;
  const setN = probs.setN;

  let [cnt, setCnt] = useState(0);

  const addCnt = () => {
    setCnt(++cnt);
    // setN(++n);
    console.log(cnt);
  }
  useEffect(() => {
    console.log("변경되었습니다.");
  });
  useEffect(() => {
    console.log("Mydiv1 처음입니다.");
    return (
      console.log("종료")
    );
  }, []);
  useEffect(() => {
    console.log("cnt 변경으로 n변경");
    setN(cnt);
  }, [cnt]);
  return (
    <div className="mydiv1">
      <h2 className="divh2">Mydiv1{user} n={n}</h2>
      <Mydiv11 user={user} divname={'사용자정의'+ cnt} />
      <div className="divbt">
        <button onClick={addCnt}>🧡</button>
        <span>{cnt}</span>
      </div>
    </div>
  );
}

export default Mydiv1;