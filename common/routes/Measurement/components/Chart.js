import React, { PropTypes } from 'react'
import { Charts, ChartContainer, ChartRow, YAxis, LineChart } from 'react-timeseries-charts'
import { TimeSeries, Event } from 'pondjs'

function parseMeasurement(measurement) {
  const events = []

  let i

  for (i = 0; i < measurement.value.length; i++) {
    const d = new Date(0)
    d.setUTCSeconds(parseFloat(measurement.timestamp[i]))

    events.push(new Event(d, { value: parseFloat(measurement.value[i]) }))
  }

  return new TimeSeries({
    name: 'measurement',
    events,
  })
}


const Chart = ({ measurement }) => (
  <div style={{ marginTop: '20' }}>
    <ChartContainer timeRange={parseMeasurement(measurement).timerange()} width={650}>
      <ChartRow height="200">
        <YAxis id="valAxis" label={ measurement.unit} min={parseMeasurement(measurement).min()}
               max={parseMeasurement(measurement).max()}
               width="60" type="linear" format=".1f"/>
        <Charts>
          <LineChart axis="valAxis" series={parseMeasurement(measurement)}/>
        </Charts>
      </ChartRow>
    </ChartContainer>
  </div>

)

Chart.propTypes = {
  measurement: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.array,
    description: PropTypes.string,
    timestamp: PropTypes.array,
    error: PropTypes.object,
  }),
}

export default Chart
