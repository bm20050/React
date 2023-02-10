import { Link } from 'react-router-dom'
import Wheader from './Wheader';
const Wmenu = () => {
  return (
    <>
      <Wheader title={'일기예보'} />
      <ul className="wmenu">
        <li><Link to="/w1">단기예보</Link></li>
        <li><Link to="/w2">중기예보</Link></li>
      </ul>
    </>
  );
}

export default Wmenu;