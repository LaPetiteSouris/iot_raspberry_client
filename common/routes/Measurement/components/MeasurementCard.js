import { Card, CardHeader, CardTitle } from 'material-ui/Card'
import React, { PropTypes } from 'react'

class MeasurementCard extends React.Component {
  componentDidMount() {
    setInterval(this.props.refresh, 2000)
  }

  render() {
    return (
      <Card>
        <CardHeader title={this.props.measurement.title} style={{
          backgroundColor: '#add7f4',
          fontWeight: 'bold',
        }}
        />

        <CardTitle title={this.props.measurement.value.slice(-1)[0]}
          subtitle={this.props.measurement.unit}
        />

      </Card>

    )
  }
}

MeasurementCard.propTypes = {
  measurement: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.array,
    description: PropTypes.string,
    timestamp: PropTypes.array,
    unit: PropTypes.String,
    error: PropTypes.object,
  }),
  refresh: PropTypes.func.isRequired,
}

export default MeasurementCard
