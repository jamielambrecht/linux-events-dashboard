import '../App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DesktopDatePicker, TimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// When using TypeScript 4.x and above
import type {} from '@mui/x-date-pickers/themeAugmentation';

export default function EventInput() {

    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue: Date | null) => {
        if (newValue) {
            setValue(newValue);
        }
    };
  
    return (
        <Container maxWidth="md">
            <Stack spacing={3}
                justifyContent="left"
                alignItems="center"
            >
                <TextField className="Text-input"
                    fullWidth={true}
                    label="Enter the name of the event"
                    type="text"
                    variant="outlined"
                    size="medium"
                />
                <TextField className="Text-input"
                    fullWidth={true}
                    label="Enter the name of the venue"
                    type="text"
                    variant="outlined"
                    size="medium"
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={2}
                            justifyContent="left"
                            alignItems="center"
                        >
                            <Typography className="Event-time-label"
                                variant="h5" gutterBottom component="div">
                                Event Start
                            </Typography>
                            <DesktopDatePicker className="Text-input"
                                label="Date desktop"
                                inputFormat="MM/dd/yyyy"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <TimePicker
                                label="Time"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                        <Stack direction="row" spacing={2}
                            justifyContent="left"
                            alignItems="center"
                        >
                            <Typography className="Event-time-label" 
                                variant="h5" gutterBottom component="div">
                                Event End
                            </Typography>
                            <DesktopDatePicker className="Text-input"
                                label="Date desktop"
                                inputFormat="MM/dd/yyyy"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <TimePicker
                                label="Time"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </Stack>
                </LocalizationProvider>
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                        <TextField className="Text-input"
                            fullWidth={true}
                            label="Enter a website URL for the event"
                            type="text"
                            variant="outlined"
                            size="medium"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField className="Text-input"
                            fullWidth={true}
                            label="Enter hashtags for the event"
                            type="text"
                            variant="outlined"
                            size="medium"
                        />
                    </Grid>
                </Grid>
                <TextField className="Text-input"
                    fullWidth={true}
                    label="Event Description"
                    type="text"
                    variant="outlined"
                    multiline={true}
                    rows={12}
                    size="medium"
                />
                <TextField className="Text-input"
                    fullWidth={true}
                    label="Venue Details"
                    type="text"
                    variant="outlined"
                    multiline={true}
                    rows={4}
                    size="medium"
                />
            </Stack>
        </Container>
    );
}