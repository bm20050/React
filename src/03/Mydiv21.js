const Mydiv21 = (probs) => {
  const user = probs.user;
  let n = probs.n;
  return (
    <div className="mydiv21">
      <h3 className="divh3">Mydiv21{user} {n}</h3>
      <p>
        {user}
      </p>
    </div>
  );
}
export default Mydiv21;