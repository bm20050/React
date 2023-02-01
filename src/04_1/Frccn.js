const Frccn = ({ cn }) => {
  // console.log(cn)
  let infoArry = cn.split(',');
  infoArry = infoArry.map((v) =>
    v.includes("높음") ?
      <li key={v} >
        <span>{v.split(':')[0]} : </span>
        <span className="lired">{v.split(':')[1]}</span></li> :
      <li key={v}>{v}</li>
  );
  return (
    <div className="mainbox2">
      <div className="detail">
        <ul>
          {infoArry}
        </ul>

      </div>

    </div>
  );

}
export default Frccn;