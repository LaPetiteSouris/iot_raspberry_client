import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import  MeasurementCard  from '../components/MeasurementCard'
import Chart from '../components/Chart'
import { provideHooks } from 'redial'
import { loadMeasurement } from '../actions'


const redial = {
  fetch: ({ dispatch }) => dispatch(loadMeasurement()),
}

const mapStateToProps = (state) => ({

  measurements: state.measurements
})


const MeasurementPage = ({ measurements }) => (

  <div id="app">
    <h1>Measurements</h1>

    <div style={{ marginTop: '50' }}>

      {
        measurements.data.map((measurement, _) =>
          <div style={{ marginTop: '50' }}>
            <MeasurementCard key={ measurement.id } measurement={measurement}/>
            <Chart measurement={ measurement}/>
          </div>
        )
      }


    </div>
  </div>

)


MeasurementPage.propTypes = {
  measurements: PropTypes.object.isRequired,
}

export default provideHooks(redial)(connect(mapStateToProps)(MeasurementPage))
