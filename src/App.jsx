import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import fetchRates from './services/thunks';
import Converter from './components/converter';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRates())
      .unwrap()
      .then((rates) => console.log(rates))
      .catch((err) => console.log(err.message));
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <Converter />
      </header>
    </div>
  );
}

export default App;
