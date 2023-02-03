const Tc2 = ({c2d, data, setData1}) => {
  // console.log(c2d);
  const show2 = (item) => {
    // console.log(item);
    let temp = [];
    for (let i of data){
      if (i["사고유형_중분류"] === item)
        temp.push(i)
    }
    // console.log(temp)
    setData1(temp);
  }
  let c2Tag = [...c2d];
  c2Tag = c2Tag.map((item) => <div className="c2Tag" onClick={() => show2(item)}>{item}</div>)
   return (
    <div className="tc2">
      <h2>중분류</h2>
      <div className="tc2menu">
        {c2Tag}
      </div>
    </div>
  );
}

export default Tc2;