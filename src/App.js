import './App.css';
import RouterMain from './09/RouterMain'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <RouterMain />
    </BrowserRouter>
  );
}

export default App;