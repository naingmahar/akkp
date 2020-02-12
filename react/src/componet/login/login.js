import React,{Component} from 'react';
import { User, Register } from '../../lib/api/axios';
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

class Login extends Component {
 
  state ={
      username:" ",
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
    this.props.history.push("dashboard")

    // if(!this.state.username) this.setState({usernameErrorMessage:"Username is empty"})
    // if(!this.state.password) this.setState({passwordErrorMessage:"password is empty"})
    // if(this.state.username && this.state.password) {
    //     Register(this.state.username,this.state.password)
    //         .then(apiResponse =>{
    //             if(apiResponse.id)  this.props.history.push("profile",this.state)
    //             if(!apiResponse.id) alert("Registration Fail")
    //         })
    //         .catch(error => alert(error.mesage))
       
    // }
  }


  render() {
    const { classes } = this.props;
    return (
        <div className="center-box" >
            {/* <div className="center-box backgroundImage">
                <div className="card" style={{padding:20,background: 'rgba(244,244,244,0.8)',borderRadius:5}}>
                    <div className="row m-b-none">
                        <h2 className="center-align grey-text darken-4">EMF</h2>
                        <form method="post">
                        <div className="input-field">
                            <TextField
                                style={{ margin: 8 }}
                                placeholder="Email"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                        </div>
                        <div className="input-field col s12 padder-x">
                            <TextField
                                style={{ margin: 8 }}
                                placeholder="Password"
                                type="password"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                        </div>
                        <Button className="middle-box" variant="contained" color="primary" onClick={this._onClickRegister}>
                        Login
                        </Button>
                        </form>
                    </div>
                </div>
            </div> */}

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
                            <TextField id="username" label="Username" variant="outlined" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Password" variant="outlined" type="password" fullWidth required />
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

export default withStyles(styles)(Login)