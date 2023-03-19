import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from "../components/navbar";
import Orders from './Orders';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checklogin, getPID, getUID } from "../functions/loginfunc";
import { professionalData, userAppointment } from "../apicalls/users";


function DashboardContent() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {

        if(!checklogin())
        {
            setLoggedIn(true);
            window.location.href = '/';
        }

    }, []);
    let TypeOP;
    function getApp()
    {
    if(getPID() != 'Userbro'){
        const UID = getPID();
        TypeOP = 'pro';
            professionalData(UID).then((response)=>{
                const mb = response.professionals[0].appointment;
                setAppointment(mb)
                 // console.log(appointment)
            })
        }
    else {
        const UID = getUID();
        TypeOP = 'user';
        userAppointment(UID).then((response)=>{
            const mb = response.appointments;
            setAppointment(mb)
            // console.log(appointment)
        })
    }
    }
    getApp();


  return (
      <>
      <Navbar loggedIn={true}/>


        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
          style={{paddingTop:'5vh'}}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders data = {appointment} TypeOp={TypeOP}/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
