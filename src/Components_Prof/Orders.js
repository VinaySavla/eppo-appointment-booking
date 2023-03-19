import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Button from '@mui/material/Button';
import { appointmentsDataUpdate } from "../apicalls/users";
// Generate Order Data
function createData(id, date, name, Appointment, paymentMethod, amount, action) {
  return { id, date, name, Appointment, paymentMethod, amount, action };
}


function preventDefault(event) {
  event.preventDefault();
}
// AppointmentStatus
//     :
//     "Done"
// Date
//     :
//     "2023-03-21T10:00:00.000Z"
// Id
//     :
//     3
// Notified
//     :
//     false
// PaidAmount
//     :
//     1500
// ProfessionalId
//     :
//     1
// TimeStamp
//     :
//     "2023-03-19T03:20:02.000Z"
// TransactionId
//     :
//     "123"
// TransactionStatus
//     :
//     "Sucessful"
// UserId
//     :
//     2
export default function Orders({data, TypeOp}) {
  function changeStatus(Id) {
    data.AppointmentStatus = "Done";
    appointmentsDataUpdate(Id, { ...data, AppointmentStatus : "Done" }).then((response)=>
    {
      console.log(response);
    })
  }

  if(TypeOp == 'pro')
  {
    return (
        <React.Fragment>
          <Title>Recent Appointments</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Appointment Id</TableCell>
                <TableCell align="right">Sale Amount</TableCell>
                <TableCell align="centre">Action</TableCell>



              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                  <TableRow key={row.Id}>
                    <TableCell>{row.Date}</TableCell>
                    <TableCell>{row.user.Name}</TableCell>
                    <TableCell>{row.Id}</TableCell>
                    <TableCell align="right">Rs. {row.PaidAmount}</TableCell>
                    <TableCell>
                      {  row.AppointmentStatus == "Done" ? <Button variant="outlined" color="error" disabled>
                        {row.AppointmentStatus}
                      </Button> : <Button variant="contained" color="success" onClick={()=>{
                        changeStatus(row.Id);
                      }}>
                        Approve
                      </Button>  }
                    </TableCell>



                  </TableRow>
              ))}
            </TableBody>
          </Table>

        </React.Fragment>
    );
  }
  else {
    return(
        <React.Fragment>
          <Title>Recent Appointments</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Service Provider</TableCell>
                <TableCell>Appointment Id</TableCell>
                <TableCell align="right">Sale Amount</TableCell>
                <TableCell align="centre">Action</TableCell>



              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                  <TableRow key={row.Id}>
                    <TableCell>{row.Date}</TableCell>
                    <TableCell>{row.professional.Name}</TableCell>
                    <TableCell>{row.Id}</TableCell>
                    <TableCell align="right">Rs. {row.PaidAmount}</TableCell>
                    <TableCell>
                      {  row.AppointmentStatus == "Done" ? <Button variant="outlined" color="error" disabled>
                        Scheduled
                      </Button> : <Button variant="contained" color="success" disabled
                      >
                        Waiting
                      </Button>  }
                    </TableCell>



                  </TableRow>
              ))}
            </TableBody>
          </Table>

        </React.Fragment>
    )
  }

}
