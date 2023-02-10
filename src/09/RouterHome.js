import { Link, useNavigate } from 'react-router-dom'

const RouterHome = () => {
  const navigate = useNavigate();
  const url = {
    "사과" : "/p2?item=사과",
    "바나나" : "/p2?item=바나나",
    "당근" : "/p2?item=당근",
  }
  const goUrl = (item) => {
    navigate(url[item]);
  }
  return (
    <>
      <h1>홈</h1>
      <h2>파라미터 전송1</h2>
      <ul>
        <li><Link to="/p1/사과">사과</Link></li>
        <li><Link to="/p1/바나나">바나나</Link></li>
        <li><Link to="/p1/당근">당근</Link></li>
      </ul>
      <h2>파라미터 전송2</h2>
      <button onClick={() => goUrl("사과")}>사과</button>
      <button onClick={() => goUrl("바나나")}>바나나</button>
      <button onClick={() => goUrl("당근")}>당근</button>
    </>
  );
}

export default RouterHome;