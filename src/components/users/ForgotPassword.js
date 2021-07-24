import React from 'react'
import {useForm} from 'react-hook-form'
import {Grid , Paper,TextField,Typography ,Button,Avatar} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const ForgotPassword=()=>{

    const { register, handleSubmit} = useForm()

    const submit = (data) => {
        // send data to backend
        console.log(data)
    }


    const paperStyle={padding :25,height:'78vh',width:310, margin:"90px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    return(
        <Grid >
            <Paper elevation={10} style={paperStyle}  onSubmit={handleSubmit(submit)}    >

                <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Verify your identity</h2>
                </Grid>

                <Typography>Enter your email here, we will send you a verification code on the email if the email is registered with us.</Typography>
                <TextField label='your Email please' placeholder='Enter Email' 
                {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                fullWidth required/>


                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>send</Button>
                
            </Paper>
    </Grid>
    )
}

export default ForgotPassword
