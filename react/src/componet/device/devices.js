import React from 'react';
import { GetSites,AddSites } from '../../lib/api/axios';
import CustomTable from "../../lib/ui/table"
import DevicesForm from './deaviceForm';

const columns = [
  { id: '_id', label: 'No', numeric: false},
  { id: 'hostname', label: 'Hostname' , numeric: false},
  { id: 'serial', label: 'Serial', numeric: false},
  { id: 'mgmt_ip', label: 'Mgmt Ip', numeric: false},
  { id: 'fw_version', label: 'FW Version', numeric: false},
  { id: 'ntp_server', label: 'NTP Server', numeric: false},
  { id: 'device_model_name', label: 'Device Model Name'},
  { id: 'remark', label: 'Remark', numeric: false},
  { id: 'edit', label: '', numeric: false},
  { id: 'delete', label: '', numeric: false},
];



export default class DevicesPage extends React.Component{
  state = {
    rows:[]
  }

  componentDidMount(){
    GetSites().then(({data}) =>{
      this.setState({rows:data})
    })
  }

  render(){
    return(
      <div id="site">
        <CustomTable columns={columns} data={this.state.rows} onAdd={AddSites} formUi={<DevicesForm />} />
      </div>
    )
  }
} 
