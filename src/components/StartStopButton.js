import React, { PropTypes } from 'react'
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native'

const StartStopButton = (props) => {
  return (
    <TouchableHighlight
      underlayColor="grey"
      onPress={onPress}
    >
      <Text>Start/Stop button</Text>
    </TouchableHighlight>
  )
}

const onPress = () => {
  console.log('pressed start/stop button')
}

StartStopButton.propTypes = {}
StartStopButton.defaultProps = {}

export default StartStopButton
