import { useState, useRef, useEffect } from 'react'

const Galmenu = ({ title, selTitle, setSelTitle }) => {
  let txtR = useRef();
  const [titleTag, setTitleTag] = useState();

  useEffect(() => {
    txtR.current.focus();
    setTitleTag(title.map((item) => <div className={item === selTitle ? "titleTagSel" : "titleTag"} key={item + v++} onClick={() => handleSelect(item)}>{item}</div>));
  }, []);

  
  const showTitleTag = () => {
    let temp = [];
    temp = title.filter((i) => i.includes(txtR.current.value))
    setTitleTag(temp.map((item) => <div className={item === selTitle ? "titleTagSel" : "titleTag"} key={item + v++} onClick={() => handleSelect(item)}>{item}</div>));
  }
  const handleSelect = (item) => {
    console.log(item);
    setSelTitle(item);
  }
  let v = 0;
  // const titleTag = title.map((item) =>
  //   <div className={item === selTitle ? "titleTagSel" : "titleTag"} key={item + v++} onClick={() => handleSelect(item)}>{item}</div>
  // )

  return (
    <div className="galmenu">
      <div className="search">
        <form>
          <input ref={txtR} type="text" name="txt1" onChange={showTitleTag} />
          <button type="reset">취소</button>
        </form>
      </div>
      {titleTag}
    </div>
  );
}

export default Galmenu;