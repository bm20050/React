import { useState, useEffect, useRef } from 'react';

const Mycom = () => {
  const [tag ,setTag] = useState()
  const txt1R = useRef();
  const txt2R = useRef();

  // 컴포넌트가 처음 랜더링 되었을 때
  useEffect(() => {
    txt1R.current.focus();
  }, []);
  const checkForm = (e) => {
    
    e.preventDefault();
    setTag(`입력된 아이디는 ${txt1R.current.value}이고 비밀번호는 ${txt2R.current.value}입니다.`)
  }
  
  return (
    <>
      <form name="myform">
        <input ref={txt1R} type="text" name="txt1" placeholder="아이디 입력" />
        <input ref={txt2R} type="password" name="txt2" placeholder="비밀번호 입력" />
        <input type="button" value="확인" onClick={checkForm} />
        <input type="reset" value="취소" />
      </form>
      <div>
        {tag}
      </div>
    </>
  );
}

export default Mycom;