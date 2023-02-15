import Wheader from './Wheader';
import weather from '../db/weather.json'
const W2 = () => {
  console.log(weather);
  return (
    <>
      <Wheader title={'날씨예보 - 중기예보'} />
      <div className="w2">
        w2
      </div>
    </>
  );
}

export default W2;