import React from 'react'
import { View, Dimensions } from 'react-native'
import {
  Circle, Path, G, Svg, Text,
} from 'react-native-svg'
import {
  AreaChart,
} from 'react-native-svg-charts'

const { width } = Dimensions.get('window')

const LineChart = (props) => {
  const Decorator = ({ x, y }) => {
    return data.map((value, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Svg key={`list circle ${index}`}>
        <G>
          <Text
            // x={5 / 2}
            dy={y(value) - 20}
            alignmentBaseline="middle"
            dx={x(index)}
            // cy={y(value)}
            textAnchor="middle"
            stroke="rgb(134, 65, 244)"
            fill="none"
          >
            {`${value}º`}
          </Text>
          <Circle
            cx={x(index)}
            cy={y(value)}
            r={4}
            stroke="rgb(134, 65, 244)"
            fill="white"
          />
        </G>
      </Svg>

    ))
  }
  const Line = ({ line }) => (
    <Path
      d={line}
      stroke="rgba(134, 65, 244)"
      fill="none"
    />
  )
  const { data } = props
  return (
    <View>
      <AreaChart
        style={{ height: 200, width: width - 40 }}
        data={data}
        // svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
        contentInset={{
          top: 50, bottom: 40, left: 30, right: 30,
        }}
      >
        <Line />
        <Decorator />
      </AreaChart>
    </View>
  )
}
export default LineChart
