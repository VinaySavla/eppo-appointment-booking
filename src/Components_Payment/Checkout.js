import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Navibar from "../components/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { appointmentsData, verify } from "../apicalls/users";
import { getUID } from "../functions/loginfunc";
import { useState } from "react";

function Copyright() {

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];



const theme = createTheme();

export default function Checkout() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [appointmentId, setAPPid] = useState();
  const {state} = useLocation();
  const data = state.data;

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review data={data}/>;
      default:
        throw new Error('Unknown step');
    }
  }
  const handleNext = () => {
    if(activeStep === 2 ){
      console.log("here")
      const Tid = Math.floor((Math.random() * 1000) + 1);
      const UID = getUID();
      const payload = {
        "Date":data.dateTime,
          "TransactionId":Tid.toString(),
          "TransactionStatus":"Sucessful",
          "AppointmentStatus":"Done",
          "PaidAmount":data.Price,
          "UserId":UID,
          "ProfessionalId":data.Id,
      }
      appointmentsData(payload).then((response) => {


        if(response.Id != '')
        {
          console.log(response);
          setAPPid(response.Id);
          setActiveStep(activeStep + 1);

        }
        else {
          console.log("Authentication failed")
        }
      });
    }
    else{
      setActiveStep(activeStep + 1);

    }


  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>

        <Navibar loggedIn={true}/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }} style={{paddingTop:'10vh'}}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your Appointment Id is {appointmentId}. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
              <Button onClick={()=>{navigate('/Dashboard')}} sx={{ mt: 3, ml: 1 }}>
                Go To Dashboard
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
