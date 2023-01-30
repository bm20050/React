const Mydiv21 = (probs) => {
  const user = probs.user;
  return (
    <div className="mydiv21">
      <h3 className="divh3">Mydiv21{user}</h3>
      <p>
        {user}
      </p>
    </div>
  );
}
export default Mydiv21;