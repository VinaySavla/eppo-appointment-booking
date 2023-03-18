import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Button from '@mui/material/Button';
// Generate Order Data
function createData(id, date, name, Appointment, paymentMethod, amount, action) {
  return { id, date, name, Appointment, paymentMethod, amount, action };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'doge',
    'Doctor Appointment',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'doge',
    'Lawyer Appointment',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'doge', 'Plumber Appointment', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'doge',
    'Dentist Appointment',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'doge',
    'Doctor Appointment',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Appointments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Appointment</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
            <TableCell align="centre">Action</TableCell>
            


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.Appointment}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
              <TableCell><Button variant="contained" color="success">
                      Approve
                        </Button>
                        <Button variant="outlined" color="error">
                     Pending
                        </Button></TableCell>
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}