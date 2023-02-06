const Galcontent = ({ selContent }) => {
  let keys = ["galTitle", "galPhotographyLocation", "galPhotographer", "galPhotographyMonth", "galSearchKeyword"];

  let selContentTag = [];
  if (Object.keys(selContent).length > 0) {
    selContentTag.push(<img src={selContent["galWebImageUrl"]} className="img" key="img"></img>);
    selContentTag.push(keys.map((item) =>
      <div className={item} key={item}>
        {item.includes("galPhotographyMonth") ? parseInt(selContent[item] / 100) + "." + ((selContent[item] % 100 < 10) ? "0" + selContent[item] % 100 : selContent[item] % 100) : selContent[item]}
      </div>));
  }

  // console.log(selContentTag)
  return (
    <div className="galcontent">
      {selContentTag}
    </div>
  );
}

export default Galcontent;