const Galmenu = ({title, selTitle, setSelTitle}) => {

  const handleSelect = (item) => {
    console.log(item);
    setSelTitle(item);
  }
  const titleTag = title.map((item) =>
   <div className={item === selTitle ? "titleTagSel" : "titleTag"} onClick={() => handleSelect(item)}>{item}</div>
  )

  return (
    <div className="galmenu">
      {titleTag}
    </div>
  );
}

export default Galmenu;