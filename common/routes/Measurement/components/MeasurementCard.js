import { Card, CardHeader, CardTitle } from 'material-ui/Card'
import React, { PropTypes } from 'react'


const MeasurementCard = ({ measurement }) => (
  <Card>
    <CardHeader
      title={ measurement.title}
    />

    <CardTitle title={ measurement.value} subtitle="Current value"/>

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



