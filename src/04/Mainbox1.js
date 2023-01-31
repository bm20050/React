
const Mainbox1 = (probs) => {
  const item = probs.item;
  const showInfo = probs.showInfo;
  
  return (
      <div className="mainbox1">
        <div className="dtdiv1" onClick={() => showInfo(1)}>{item.frcstOneDt}</div>
        <div className="dtdiv1" onClick={() => showInfo(2)}>{item.frcstTwoDt}</div>
        <div className="dtdiv1" onClick={() => showInfo(3)}>{item.frcstThreeDt}</div>
        <div className="dtdiv1" onClick={() => showInfo(4)}>{item.frcstFourDt}</div>
      </div>
  );
}

export default Mainbox1;