import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

const LapButton = ({onLapButtonPress}) => {
  return (
    <TouchableHighlight
      onPress={onLapButtonPress}
      style={styles.button}
    >
      <Text>Lap button</Text>
    </TouchableHighlight>
  )
}

const onPress = () => {
  console.log('pressed lap button')
}

LapButton.propTypes = {}
LapButton.defaultProps = {}

export default LapButton

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})