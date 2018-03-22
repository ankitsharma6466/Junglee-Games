import React from 'react';
import { connect } from 'react-redux';
import Success from './success'

function mapStateToProps(state) {
  return {
    loader: state.success.loader
  }
}

export default connect(mapStateToProps)(Success);