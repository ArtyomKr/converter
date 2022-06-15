import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import fetchRates from './services/thunks';
import Converter from './components/Сonverter';

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
      <Converter />
    </div>
  );
}

export default App;
