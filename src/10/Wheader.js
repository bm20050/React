import { Link } from 'react-router-dom'

const Wheader = ({title}) => {
  return (
    <>
      <div className="wheader">
        <h1>{title}</h1>
        <button><Link to="/">홈으로</Link></button>
      </div>
    </>
  );
}

export default Wheader;