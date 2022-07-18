
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import IEventData from '../models/EventData';

interface IColumn {
  label: string,
  displayData: string[],
  headerProps?: {}
  cellProps? : {}
}

export default function DenseTable(props : {data: IEventData[]}) {

  const columns : IColumn[] = [
    { label:        "Event",
      displayData:  props.data.map(element => element.event_name),
      cellProps:    {"component": "th", "scope": "row"}
    },
    { label:        "Where",
      displayData:  props.data.map(element => element.venue),
      headerProps:   {"align" : "right"},
      cellProps:     {"align" : "right"}
    },
    { label :       "When",
      displayData:  props.data.map(element => element.when_start_date.toDateString()),
      headerProps:   {"align" : "right"},
      cellProps:     {"align" : "right"}
    },
    { label :       "Website",
      displayData:  props.data.map(element => element.website),
      headerProps:   {"align" : "right"},
      cellProps:     {"align" : "right"}
    },
    { label :       "Description",
      displayData:  props.data.map(element => element.description),
      headerProps:   {"align" : "right"},
      cellProps:     {"align" : "right"}
    },
    { label :       "Venue\ Details",
      displayData:  props.data.map(element => element.venue_details),
      headerProps:   {"align" : "right"},
      cellProps:     {"align" : "right"}
    },
    { label :       "Tags",
      displayData:  props.data.map(element => element.tags.toString()),
      headerProps:   {"align" : "right"},
      cellProps:     {"align" : "right"}
    },
  ];

  return (
    <div className="Table-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {columns.map(column => <TableCell {...column.headerProps}>{column.label}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
          {props.data.map((event : IEventData, index: number) => (
            <TableRow
              key={event.event_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map(column => <TableCell {...column.cellProps}>{column.displayData[index]}</TableCell>)}
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}



