import { useState, useEffect } from 'react';
import BoxOfficeDetail from './BoxOfficeDetail';

const BoxOfficeList = ({ targetDt }) => {

  const [mvlist, setMvlist] = useState([]);
  const [mvCd, setMvCd] = useState();
  useEffect(() => {
    if (!targetDt) return;
    const apikey = 'abca8b86cc572883d6fac0633a6576df';
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
        setMvlist(data.boxOfficeResult.dailyBoxOfficeList);
      })
      .catch((err) => console.log(err))
  }, [targetDt])

  // 영화 클릭
  const showDetail = (cd) => {
    setMvCd(cd);
  }

  let titleTag = <div className="rowDiv0">
    <span className="col" id="colrank">순위</span>
    <span className="col" id="colmovieNm">영화명</span>
    <span className="col" id="colaudiAcc">누적관객수</span>
    <span className="col" id="colrankInten">증감률</span>
  </div>;

  let mvlistTags = [];
  for (let mv of mvlist) {
    let inten = '-';
    if (mv.rankInten > 0)
      inten = <span className="spup">{'▲' + mv.rankInten}</span>
    else if (mv.rankInten < 0)
      inten = <span className="spdown">{'▼' + -mv.rankInten}</span>

    mvlistTags.push(
      <div className="rowDiv" key={mv.movieCd} onClick={() => showDetail(mv.movieCd)}>
        <span className="col" id="colrank">{mv.rank}</span>
        <span className="col" id="colmovieNm">{mv.movieNm}</span>
        <span className="col" id="colaudiAcc">{parseInt(mv.audiAcc).toLocaleString('ko-KR')}</span>
        <span className="col" id="colrankInten">{inten}</span>
      </div>
    );
  }
  return (
    <div className='a'>
      <div className='content'>
        {titleTag}
        {mvlistTags}
      </div>
      <div className='detail'>
        {mvCd && <BoxOfficeDetail mvCd={mvCd} targetDt={targetDt} />}
      </div>
    </div>

  );
}

export default BoxOfficeList;