// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyleSheet, { CONTEXT_KEY } from './StyleSheet'

class StyleSheetManager extends Component {
  props: {
    children?: React$Element<any>,
    sheet: StyleSheet
  }
  getChildContext() {
    return { [CONTEXT_KEY]: this.props.sheet }
  }

  render() {
    /* eslint-disable react/prop-types */
    return React.Children.only(this.props.children)
  }
}

StyleSheetManager.childContextTypes = {
  [CONTEXT_KEY]: PropTypes.instanceOf(StyleSheet).isRequired,
}

StyleSheetManager.propTypes = {
  sheet: PropTypes.instanceOf(StyleSheet).isRequired,
}

export default StyleSheetManager
