import React,{Component} from 'react';
import { Login } from '../../lib/api/axios';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint,VerifiedUser } from '@material-ui/icons'

const styles = theme => ({
    margin: {
        margin: theme.spacing(3),
    },
    root:{
        maxWidth:"40%",
        padding:"20px"
    }

});

class LoginPage extends Component {
 
  state ={
      username:"",
      password:"",
      usernameErrorMessage:"",
      passwordErrorMessage:""
  }

  _onChageEmail= (e) =>{
      this.setState({username:String(e.target.value).trim()})
  }

  _onChagePasword= (e) =>{
    this.setState({password:e.target.value})
}

  _onClickRegister = () =>{

    if(!this.state.username) {alert("Username is empty");return}
    if(!this.state.password) {alert("password is empty");return}

    if(this.state.username && this.state.password) {
        Login(this.state.username,this.state.password)
            .then(apiResponse =>{
                if(apiResponse.key.key != "")  this.props.history.push("dashboard")
                if(apiResponse.key.key == "") alert("Login Fail")
            })
            .catch(error => alert(error.mesage))
       
    }
  }


  render() {
    const { classes } = this.props;
    return (
        <div className="center-box" >
            <Paper variant="outlined" className="login-root">
                <div className={classes.margin}>

                    <Grid container alignItems="center" justify="center">
                        <Grid item>
                            <VerifiedUser color="primary" />
                        </Grid>
                        <Grid item>
                            <h3>Login</h3>
                        </Grid>
                    </Grid>
                   
                    <Grid container spacing={8} alignItems="flex-end"  style={{ marginTop: '20px' }}>
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField 
                                onChange = {(e)=>this.setState({username:e.target.value})}
                                id="username" 
                                label="Username" 
                                variant="outlined" 
                                type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField 
                                onChange = {(e)=>this.setState({password:e.target.value})}
                                id="password" 
                                label="Password" 
                                variant="outlined" 
                                type="password" fullWidth required />
                        </Grid>
                    </Grid>
        
                    <Grid container justify="center" style={{ marginTop: '30px' }}>
                        <Button variant="contained" color="primary" style={{ textTransform: "none" }} onClick={this._onClickRegister}>Login</Button>
                    </Grid>
                </div>
            </Paper>
        </div>
    )
  }
}

export default withStyles(styles)(LoginPage)