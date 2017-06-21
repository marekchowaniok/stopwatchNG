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
  }
})

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

LapButton.propTypes = {
  onLapButtonPress: PropTypes.func
}
LapButton.defaultProps = {}

export default LapButton

