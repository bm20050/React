const Tdetail = ({data1}) => {
  console.log(data1)
  let keys = Object.keys(data1[0])
  let values = Object.values(data1[0])
  console.log(keys)
  console.log(values)
  let data1Tag = [];
  for (let i = 0; i < keys.length; i++) {
    data1Tag.push(<div className="data1Tag">{keys[i]}: {values[i]}</div>)
  }
  
  return (
    <div className="tdetail">
      <h2>상세내용</h2>
      <div className="data1">
        {data1Tag}
      </div>
    </div>
   
  );
}

export default Tdetail;