import React from 'react';
import { Button, TextField, Grid } from '@mui/material';
import Snowfall from 'react-snowfall';

function Contact() {
  return (
    <div className="about-container">
      <Snowfall snowflakeCount={100} className="snowfall-fixed" />
      <div className="about-content">
        <h1>Contact Me</h1>
        <form>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <TextField fullWidth label="Your Name" variant="outlined" className="white-textfield" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Subject" variant="outlined" className="white-textfield" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Your Email" variant="outlined" className="white-textfield" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Message" multiline rows={4} variant="outlined" className="white-textfield" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" className="contact-button">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default Contact;
