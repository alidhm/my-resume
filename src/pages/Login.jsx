import React, { useState } from 'react';
import { Button, TextField, Grid, FormControlLabel, Checkbox, Link } from '@mui/material';
import Snowfall from 'react-snowfall';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      navigate('/contact');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="about-container">
      <Snowfall snowflakeCount={100} className="snowfall-fixed" />
      <div className="about-content">
        <h1>Login</h1>
        <form>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                label="Email" 
                variant="outlined" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="white-textfield" 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                label="Password" 
                type="password" 
                variant="outlined" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="white-textfield" 
              />
            </Grid>

            <Grid item xs={12}>
              <div className="forgot-remember">
                <FormControlLabel
                  control={<Checkbox defaultChecked style={{ color: '#007bff' }} />}
                  label="Remember Me"
                  style={{ margin: 0 }}
                />
                <Link href="#" className="forgot-link">
                  Forgot Password?
                </Link>
              </div>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" className="contact-button" onClick={handleLogin}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default Login;
