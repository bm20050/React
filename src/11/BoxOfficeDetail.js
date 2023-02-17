import { useEffect, useState } from "react";

const BoxOfficeDetail = ({ mvCd }) => {
  console.log(mvCd);
  
  const [mTag, setMTag] = useState([]);
  
  const getData = async() => {
    const apikey = 'abca8b86cc572883d6fac0633a6576df';
    let url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${mvCd}`;
    try {
      const resp = await fetch(url);
      const data = await resp.json(url);
      console.log(data);

      let info = data.movieInfoResult.movieInfo;
      
      setMTag(
        <div className="detailTag">
          <li>영화제목: <span className="d">{info.movieNm}</span></li>
          <li>제작연도: <span className="d">{info.prdtYear}</span></li>
          <li>개봉연도: <span className="d">{info.openDt}</span></li>
          <li>영화유형: <span className="d">{info.typeNm}</span></li>
          <li>제작국가: <span className="d">{info.nations[0].nationNm}</span></li>
          <li>장르: <span className="d">{info.genres[0].genreNm}</span></li>
          <li>감독: <span className="d">{info.directors[0].peopleNm}</span></li>
          {
            info.actors[0] && 
            <li>배우: <span className="d">{info.actors[0].peopleNm}</span>
              <span className="d">, {info.actors[1].peopleNm}</span>
            </li>
          }
        </div>
      );

    }
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setMTag(mTag);
  }, []);

  useEffect(() => {
    getData();
  }, [mvCd]);

  
  return (
    <>
      {mvCd && mTag}
    </>
  );
}


export default BoxOfficeDetail;