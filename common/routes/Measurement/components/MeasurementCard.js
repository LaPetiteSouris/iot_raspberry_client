import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadMeasurement } from '../actions'


const redial = {
  fetch: ({ dispatch }) => dispatch(loadMeasurement()),
}

const mapStateToProps = (state) => {
  return state.measurement
}


const MeasurementCard = ({ title, value, description }) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={ title}/>}
    >
      <img src="http://1.bp.blogspot.com/-TYcddWRWuwk/Vi98dmiFmsI/AAAAAAAAAX8/Er7x8_08Ues/s1600/Material%2BCharts.png"/>
    </CardMedia>
    <CardTitle title={ value} subtitle="Current value"/>
    <CardText>{ description }</CardText>

  </Card>
)

MeasurementCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  error: PropTypes.object,
}


export default provideHooks(redial)(connect(mapStateToProps)(MeasurementCard))
