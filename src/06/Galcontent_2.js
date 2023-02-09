const Galcontent_2 = ({ selContent }) => {
  let keys = ["Title", "PhotographyLocation", "Photographer", "PhotographyMonth", "SearchKeyword"];
  console.log(selContent)
  let selContentTag = [];
  if (Object.keys(selContent).length > 0) {
    selContentTag.push(<img src={selContent["WebImageUrl"]} className="img" key="img"></img>);
    selContentTag.push(keys.map((item) =>
      <div className={item} key={item}>
        {item.includes("PhotographyMonth") ? parseInt(selContent[item] / 100) + "." + ((selContent[item] % 100 < 10) ? "0" + selContent[item] % 100 : selContent[item] % 100) : selContent[item]}
      </div>));
  }

  // console.log(selContentTag)
  return (
    <div className="galcontent">
      {selContentTag}
    </div>
  );
}

export default Galcontent_2;