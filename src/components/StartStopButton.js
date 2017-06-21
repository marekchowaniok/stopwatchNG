import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'

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

StartStopButton.propTypes = {
  onStartStopPress: PropTypes.func,
  name: PropTypes.string
}
StartStopButton.defaultProps = {}

export default StartStopButton

