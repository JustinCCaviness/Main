import React, { Component } from 'react';
import Username from './username'
import Password from './password'
import ShowPassword from './showpassword';
;


export default class Home extends Component {
  render() {
    return (
        <div
            style = {{width: '180px', margin: 'auto'}}
        >
            <Username />
            <Password />
            <ShowPassword />
        </div>
    );
  }
}