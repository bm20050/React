import './App.css';
import { BrowserRouter } from 'react-router-dom'
import BoxOffice from './11/BoxOffice';
const App = () => {
  return (
    <BrowserRouter>
      <BoxOffice/>
    </BrowserRouter>
  );
}

export default App;