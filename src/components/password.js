import React, { Component } from 'react';

export default class Password extends Component {
  constructor(props) {
    super(props)
    props.actions.type('password')
  }

  changed = e =>{
      this.props.actions.value(e.target.value)
  }

  render() {
    return (
        <div 
            className = { [...this.props.classnames, (this.props.valid) ? 'valid' : 'invalid'].join(' ')}
        >
            <input
                type = {this.props.type}
                value = {this.props.value}
                onChange = {this.changed}
            />
        </div>
    );
  }
}