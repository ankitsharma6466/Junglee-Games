import React from 'react';
import { connect } from 'react-redux';
import Home from './home'

function mapStateToProps(state) {
  return {
    test: state.home.test
  }
}

export default connect(mapStateToProps)(Home);