import React,{useState} from 'react'
//import { useForm } from 'react-hook-form'
import { Grid, Paper, TextField, Typography, Button, Avatar, Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'
import {useHistory} from  'react-router-dom'

    function loginUser(credentials) {
    return axios.post('/users/login', credentials) 
    }


const Login = ({ setToken }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory()

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
          email,
          password
        });

        setToken(response.data.token);
        history.push("/workshops")
      }

    const paperStyle = { padding: 25, height: '75vh', width: 310, margin: "130px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    return (
        <Grid >
            <form onSubmit={handleSubmit}>

                <Paper 
                elevation={10} 
                style={paperStyle}  >

                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Welcome to digital campus</h2>
                    </Grid>


                    <TextField 
                        label='your Email please' 
                        placeholder='Enter Email'
                        fullWidth required 
                        onChange={e => setEmail(e.target.value)}/>

                    <TextField 
                        label='Password' 
                        placeholder='Enter password' 
                        type='password' 
                        fullWidth required
                        onChange={e => setPassword(e.target.value)} />
                    <FormControlLabel 
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me" />

                    <Button 
                        type='submit' 
                        color='primary' 
                        variant="contained" 
                        style={btnstyle} 
                        fullWidth>Login</Button>

                    <Typography > Do you have an account ?
                        <Link href="Register" 
                        type="submit" > Sign Up  </Link>
                    </Typography>

                </Paper>
            </form>
        </Grid>
    )
}

export default Login



