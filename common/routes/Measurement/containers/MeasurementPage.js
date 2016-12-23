import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import  MeasurementCard  from '../components/MeasurementCard'
import Chart from '../components/Chart'
import { provideHooks } from 'redial'
import { loadMeasurement } from '../actions'
import NavbarInstance from '../../NavBar'


const redial = {
  fetch: ({ dispatch }) => dispatch(loadMeasurement()),
}

const mapStateToProps = (state) => ({

  measurements: state.measurements,
})

const mapDispatchToProps = (dispatch) => ({
  refresh: () => {
    dispatch(loadMeasurement())
  },
})

const MeasurementPage = ({ measurements, refresh }) => (


  <div id="app">
    <NavbarInstance/>

    <div style={{ marginTop: '50' }}>

      {
        measurements.data.map((measurement, _) =>
          <div style={{ marginTop: '50' }}>
            <MeasurementCard key={ measurement.id } measurement={measurement} refresh={refresh}/>
            <Chart measurement={ measurement}/>
          </div>
        )
      }

    </div>
  </div>

)


MeasurementPage.propTypes = {
  measurements: PropTypes.object.isRequired,
  refresh: PropTypes.func.isRequired,
}

export default provideHooks(redial)(connect(mapStateToProps, mapDispatchToProps)(MeasurementPage))
