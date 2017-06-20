import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

const StartStopButton = ({onStartStopPress, name}) => {
  return (
    <TouchableHighlight
      underlayColor="grey"
      onPress={onStartStopPress}
      style={[styles.button, styles.startButton]}
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

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: 'green'
  }
})