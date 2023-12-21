import './App.css';
import Filtre from './Components/Filtre/Filtre';
import Users from './Components/Users/Users';
import { MainContextProvider } from './Context/Context';

function App() {
  return (
    <div className='app-container'>
      <MainContextProvider>
        <Filtre></Filtre>
        <Users></Users>
      </MainContextProvider>
    </div>
  );
}

export default App;
