import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

const LapButton = (props) => {
  return (
    <TouchableHighlight
      onPress={onPress}
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