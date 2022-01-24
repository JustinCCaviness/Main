import React, { Component } from 'react';
import {connect} from 'react-redux'
import actions from '../redux/actions'
import Home from './home'
import Page1 from './home'
//import DevTools from './DevTools'
const mapStateToProps = state => {
    return {
        page: state.spa.page
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            next: () => dispatch(actions.spa.page.next()),
            previous: () => dispatch(actions.spa.page.previous())
        } 
    }
}

class SPA extends Component {
  previous = () => {
      this.props.actions.previous()
  }
  next = () => {
      this.props.actions.next()
  }

  render() {
    return (
        <div>
            <div>PAGE: {this.props.page}</div>
            {this.props.page === 0 ? <Home /> : null}
            {this.props.page === 1 ? <Page1 /> : null}
            <div>
                <button 
                    value='PREVIOUS'
                    onClick={this.previous}
                >
                PREVIOUS
                </button>
                <button
                    value='NEXT'
                    onClick={this.next}
                >
                NEXT
                </button>
            </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SPA)