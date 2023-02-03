const Tc1 = ({c1, c2, setC2d}) => {
  let c1Tag = [...c1];
  let temp = [];
  const show = (item) => {
    // console.log(item);
    for (let i of c2) {
      if (i[0] === item)
        temp.push(i[1]);
    }
   
    setC2d(temp);
  }
  c1Tag = c1Tag.map((item) => <div className="c1Tag" onClick={() => show(item)}>{item}</div>);
  return (
    <div className="tc1">
      <h2>대분류</h2>
      <div className="tc1menu">
        {c1Tag}
      </div>
    </div>
  );
}

export default Tc1;