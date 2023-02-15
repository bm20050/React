import { useState, useEffect } from 'react';

const BoxOfficeList = ({targetDt}) => {
  
  const [mvlist, setMvlist] = useState();
  // 맨 처음 랜더링 시
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
  }, [])
  // let mvlistTag = mvlist.map((i) => 
  //   <div>i.rank</div>
  // );
  return (
    <div>
      <div>
        {/* {mvlistTag} */}
      </div>
      <div>
        상세
      </div>
    </div>
  );
}

export default BoxOfficeList;