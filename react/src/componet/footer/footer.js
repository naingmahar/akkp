import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, makeStyles, withStyles, Grid, Paper, Box } from '@material-ui/core';
import $ from 'jquery'

const useStyles = makeStyles({
  root: {
    width:"100%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Footer extends React.Component {
 
  state ={
    footerLeftPadding:90
  }

  UNSAFE_componentWillMount (){ }

  render() {
    const { classes } = this.props;
    
    // $(document).ready(()=>{
    //   // console.log("hello")
    //   $("#DrawerButton").click(()=>{
    //     $("#footer").css("text-align","left")
    //     this.setState({footerLeftPadding:250})
    //   })
    //   $("#DrawerClose").click(()=>{
    //     $("#footer").css("text-align","left")
    //     this.setState({footerLeftPadding:90})
    //   })

    // })
    return (
      <div className="footer-box" id="footer">
          <Grid item xs={12} style={{padding:10,backgroundColor:"#e0e0e0",paddingLeft:this.state.footerLeftPadding}}>
            <Typography>
              Copyright
              <span>
                &copy; {1900 + new Date().getYear()}{" "}
                <a href="http://www.frontiir.com/" >Frontiir</a>, made with love for a better web
              </span>
            </Typography>
          </Grid>
      </div>)
  }
}


export default withStyles(useStyles)(Footer)