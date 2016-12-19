import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'

import { provideHooks } from 'redial'
import { React, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPost } from '../actions'

import { selectCurrentPost } from '../reducer'


const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadPost(slug))
}

const mapStateToProps = state => selectCurrentPost(state)


const MeasurementCard = ({ title, value, description }) => (
  <Card>
    <CardHeader
      title={ title }
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}
    >
      <img src="chart.jpg" />
    </CardMedia>
    <CardTitle title={ value} subtitle="Card subtitle"/>
    <CardText>{ description }</CardText>

  </Card>
)

MeasurementCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
}


export default provideHooks(redial)(connect(mapStateToProps)(MeasurementCard))
