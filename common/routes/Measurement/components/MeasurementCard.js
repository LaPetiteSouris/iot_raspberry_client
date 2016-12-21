import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import React, { PropTypes } from 'react'


const MeasurementCard = ({ measurement }) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={ measurement.title}/>}
    >
      <img src="http://1.bp.blogspot.com/-TYcddWRWuwk/Vi98dmiFmsI/AAAAAAAAAX8/Er7x8_08Ues/s1600/Material%2BCharts.png"/>
    </CardMedia>
    <CardTitle title={ measurement.value} subtitle="Current value"/>
    <CardText>{ measurement.description }</CardText>

  </Card>
)

MeasurementCard.propTypes = {
  measurement: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.object,
  }),
}

export default MeasurementCard



