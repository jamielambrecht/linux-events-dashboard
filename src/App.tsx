import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DenseTable from './components/DenseTable';
import IEventData, {createEvent} from './models/EventData';

function App() {
  const [data, setData] = useState<IEventData[]>([])

  const getData = () => {
    const new_data = createEvent()
    setData([...data, new_data]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div>
            <DenseTable
              data={data}
            />
          </div>
          <div>
            <Button variant="contained" onClick={getData}>Create a new entry</Button>
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
