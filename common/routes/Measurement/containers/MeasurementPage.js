import React from 'react'
import { connect } from 'react-redux'
import MeasurementCard from '../components/MeasurementCard'

class MeasurementPageSmart extends React.Component {

  render() {
    return (
      <div id="app">
        <h1>Measurement Card</h1>
        <div style={{ marginTop: '50' }}>
          <MeasurementCard /></div>
      </div>
    )
  }

}

export default connect()(MeasurementPageSmart)
