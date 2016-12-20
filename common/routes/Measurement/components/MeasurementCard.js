import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'

import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadMeasurement } from '../actions'

import { selectCurrentMeasurement } from '../reducer'


const redial = {
  fetch: ({ dispatch }) => dispatch(loadMeasurement()),
}

const mapStateToProps = state => selectCurrentMeasurement(state)


const MeasurementCard = ({ title, value, description }) => (
  <Card>
    <CardHeader
      title={ title }
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}
    >
      <img src="chart.jpg"/>
    </CardMedia>
    <CardTitle title={ value} subtitle="Card subtitle"/>
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
