import Mydiv21 from "./Mydiv21";
const Mydiv2 = (probs) => {
  const user = probs.user;
  let n = probs.n;
  return (
    <div className="mydiv2">
      <h2 className="divh2">Mydiv2{user}</h2>
      <Mydiv21 user={user} n={n} />
    </div>
      
  );
}

export default Mydiv2;