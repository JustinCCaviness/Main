import React, { Component } from 'react';

export default class ShowPassword extends Component {
  constructor(props) {
    super(props)
    props.actions.type('checkbox')
    props.actions.clicked(false)
  }

  clicked = e =>{
      this.props.actions.clicked(e.target.checked)
  }

  render() {
    return (
        <div 
            className = { [...this.props.classnames, (this.props.valid) ? 'valid' : 'invalid'].join(' ')}
        >
            <input
                type = {this.props.type}
                value = {this.props.value}
                onChange = {this.clicked}
                checked = {this.props.checked}
                //defaultChecked = {false}
            />
        </div>
    );
  }
}