import React, { PropTypes } from 'react'
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native'

const StartStopButton = ({onStartStopPress, name}) => {
  return (
    <TouchableHighlight
      underlayColor="grey"
      onPress={onStartStopPress}
    >
      <Text>{name}</Text>
    </TouchableHighlight>
  )
}

const onPress = () => {
  console.log('pressed start/stop button')
}

StartStopButton.propTypes = {}
StartStopButton.defaultProps = {}

export default StartStopButton
