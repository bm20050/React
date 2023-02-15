const Async = () => {
  const funcA = () => {
    console("함수")
  }
  console.log("1")
  console.log("2")
  setTimeout(() => {
    console.log("타임아웃1")
    setTimeout(() => {
      console.log("타임아웃2")
      setTimeout(() => {
        console.log("타임아웃3")
      }, 500);
    }, 100);
  }, 1000);

  console.log("3")
  return (
    <>
    </>
  );
}

export default Async;