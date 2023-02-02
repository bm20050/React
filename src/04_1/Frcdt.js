const Frcdt = ({ frcdt, setDt }) => {
  console.log("frcdt-dt", frcdt)
  let dtdiv1Tag = [...frcdt];
  const show = (v) => {
    // console.log(v);
    setDt(v);
  }
  dtdiv1Tag = dtdiv1Tag.map((v) =>
    <div className='dtdiv1' key={v} onClick={() => show(v)}>{v}</div>
  );
  // console.log(dtdiv1Tag);

  return (
    <div className="mainbox1">
      {dtdiv1Tag}
    </div>
  );
}
export default Frcdt;