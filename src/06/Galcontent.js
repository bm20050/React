const Galcontent = ({ selContent }) => {
  let keys = ["galTitle", "galPhotographyLocation", "galPhotographer", "galPhotographyMonth", "galSearchKeyword"];

  let selContentTag = [];
  if (Object.keys(selContent).length > 0) {
    selContentTag.push(<img src={selContent["galWebImageUrl"]} className="img"></img>);
    selContentTag.push(keys.map((item) => <div className={item}>{selContent[item]}</div>));
  }

  // console.log(selContentTag)
  return (
    <div className="galcontent">
      {selContentTag}
    </div>
  );
}

export default Galcontent;