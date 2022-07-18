import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DenseTable from './components/DenseTable';
import IEventData, {createEvent} from './models/EventData';
import axios, {AxiosResponse} from 'axios';
import EventInput from './components/EventInput';

// const axios = require('axios');

function App() {
  
  const [data, setData] = useState<IEventData[]>([])

  const getData = () => {
    axios.get('http://localhost:8000/events/').then((res : AxiosResponse) => {
      res.data.map((event : IEventData) => {
        const new_data = createEvent({
          "id": event.id,
          "event_name": event.event_name,
          "venue": event.venue,
          "when_start_date": new Date(),
          "when_start_time": new Date(),
          "when_end_date": new Date(),
          "when_end_time": new Date(),
          "website": event.website,
          "description": event.description,
          "venue_details": event.venue_details,
          "tags": event.tags,
        });
        // alert(new_data.event_name);
        setData([new_data]);
      })
    });
  }

  return (
    <div className="App">

      {/* <header className="App-header">
      </header> */}

      {/* ========= BODY OF PAGE ========= */}
      <Grid container spacing={2} className="Main-body">
        {/* ========= LEFT SIDE ========= */}
        <Grid item xs={6} className="Main-left">
          <div className="Events-input-container">
            <div>
              <EventInput/>
            </div>
            <div className="Button-container">
              <Button variant="contained" onClick={getData}>Create a New Entry</Button>
            </div>
          </div>
        </Grid>
        {/* ========= RIGHT SIDE ========= */}
        <Grid item xs={6} className="Main-right">
          <div className="Events-display-container">
            <div>
              <DenseTable
                data={data}
              />
            </div>
            <div>
              <Button variant="contained" onClick={getData}>Fetch Entries From API</Button>
            </div>
          </div>
        </Grid>
      {/* ========= END BODY OF PAGE ========= */}
      </Grid>

    </div>
  );
}

export default App;
