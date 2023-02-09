import RouterHome from './RouterHome';
import RouterNv from './RouterNv'
import RouterPage1 from './RouterPage1';
import RouterPage2 from './RouterPage2';
import { Route, Routes } from 'react-router-dom'

const RouterMain = () => {
  return (
    <>
      <RouterNv />
      <Routes>
        <Route path="" element={<RouterHome />} />
        <Route path="/p1" element={<RouterPage1 />} />
        <Route path="/p2" element={<RouterPage2 />} />
      </Routes>
    </>
  );
}

export default RouterMain;