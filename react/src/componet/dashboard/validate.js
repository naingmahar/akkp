import React,{Component} from 'react';
import {MiniDrawer} from "./dashboard"
import { Auth } from '../../lib/api/auth.model';

class ValidatePage extends Component {

    UNSAFE_componentWillMount(){
        if(Auth.user.key.key == "") this.props.history.push("")
    }

    _logOut = () =>{
      Auth.clear()
      this.props.history.push("")
    }

  render() {
    return <MiniDrawer onLogout={this._logOut} />
  }
}

export default ValidatePage