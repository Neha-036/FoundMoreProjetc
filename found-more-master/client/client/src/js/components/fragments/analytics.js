/* eslint-disable */

import React from "react"
import { withRouter } from "react-router"

class Analytics extends React.Component {
  constructor(props) {
    super(props)
    this.locationChanged = this.locationChanged.bind(this)
  }

  componentDidMount() {
    if(Array.isArray(window.dataLayer) && !this.detachListener) {
      this.sendPageViewforLocation(this.props.location)
      this.detachListener = this.props.history.listen(this.locationChanged)
    }
  }

  sendPageViewforLocation(location) {
    const { pathname, search } = location
    window.dataLayer.push({
      event: 'pageview',
      page: {
        path: pathname + search
      }
    });
  }

  locationChanged(location) {
    if(this.props.history.action === 'PUSH') {
      this.sendPageViewforLocation(location)
    }
  }

  componentWillUnmount() {
    if(!this.detachListener) return
    this.detachListener()
    this.detachListener = null
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return null
  }
}

export default withRouter(Analytics)
