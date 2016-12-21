import { Card, CardHeader, CardTitle } from 'material-ui/Card'
import React, { PropTypes } from 'react'


const MeasurementCard = ({ measurement }) => (
  <Card>
    <CardHeader
      title={ measurement.title}
    />

    <CardTitle title={ measurement.value.slice(-1)[0]} subtitle="Current value"/>

  </Card>
)

MeasurementCard.propTypes = {
  measurement: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.array,
    description: PropTypes.string,
    timestamp: PropTypes.array,
    error: PropTypes.object,
  }),
}

export default MeasurementCard



