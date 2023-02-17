import { useEffect, useState } from "react";

const BoxOfficeDetail = ({ mvCd, targetDt }) => {
  console.log(mvCd);
  
  const [mTag, setMTag] = useState();
  const getData = async() => {
    const apikey = 'abca8b86cc572883d6fac0633a6576df';
    let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${mvCd}`;
    try {
      const resp = await fetch(url);
      const data = await resp.json(url);
      console.log(data);

      // object
      let temp = data.movieInfoResult.movieInfo;
      console.log("temp", temp)
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
      
    </>
  );
}


export default BoxOfficeDetail;