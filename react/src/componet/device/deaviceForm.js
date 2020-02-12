import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { AddSites, GetSites } from '../../lib/api/axios';

export default class DevicesForm extends React.Component{
  
  state = {
    mac:"",
    hostname:"",
    serial:"",
    mgmt_ip:"",
    fw_version:"",
    operational_status :"",
    ntp_server :"",
    remark : "",
    device_model_id : "",
    device_model_name : ""
  }

  UNSAFE_componentWillMount(){
    console.log(this.props)
    if(this.props.data) this.setState(this.props.data)
    // GetSites()
    // .then(data=>{
    //   this.setState(data.data[0])
    // })
    // .catch(error=>alert(error.message))
  }

  _onClickAction = () => {

    AddSites(this.state)
      .then(()=>" Success Adding Site")
      .catch(error=>alert(error.message))
  }

  render(){
    return(
      <div style={{padding:"30px"}}>

        <TextField
          style={{ margin: 8 }}
          placeholder="Mac"
          fullWidth
          value={this.state.mac}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={event=>this.setState({mac:event.target.value})}
        />

<TextField
          style={{ margin: 8 }}
          value={this.state.hostname}
          placeholder="Hostname"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={event=>this.setState({hostname:event.target.value})}
        />

<TextField
          value={this.state.serial}
          style={{ margin: 8 }}
          placeholder="Serial"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={event=>this.setState({serial:event.target.value})}
        />

<TextField
          value={this.state.mgmt_ip}
          style={{ margin: 8 }}
          placeholder="Mgmt Ip"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={event=>this.setState({mgmt_ip:event.target.value})}
        />

<TextField

          value={this.state.fw_version}
          style={{ margin: 8 }}
          placeholder="FW Version"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={event=>this.setState({fw_version:event.target.value})}
        />

<TextField

          value={this.state.ntp_server}
          style={{ margin: 8 }}
          placeholder="NTP Server"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={event=>this.setState({ntp_server:event.target.value})}
        />

<TextField

          value={this.state.device_model_name}
          style={{ margin: 8 }}
          placeholder="Device Model Name"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={event=>this.setState({device_model_name:event.target.value})}
        />


<TextField

          value={this.state.remark}
          style={{ margin: 8 }}
          placeholder="Remark"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={event=>this.setState({remark:event.target.value})}
        />


<TextField

          value={this.state.device_model_id}
          style={{ margin: 8 }}
          placeholder="Device Model Id"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={event=>this.setState({device_model_id:event.target.value})}
        />


<TextField

          value={this.state.operational_status}
          style={{ margin: 8 }}
          placeholder="Operational Status"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={event=>this.setState({operational_status:event.target.value})}
        />

      
        <Button 
          variant="contained" 
          color="primary" 
          style={{ textTransform: "none",marginTop:"30px" }} 
          onClick={this._onClickAction}>
            Add Site
          </Button>                

      </div>
    )
  }
} 
