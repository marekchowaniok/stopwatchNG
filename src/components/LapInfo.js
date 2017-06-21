import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import formatTime from 'minutes-seconds-milliseconds'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  item: {
    fontSize: 30
  }
})

const LapInfo = ({lap}) => {
  return (
    <View>
      <Text style={styles.item}>{formatTime(lap)}</Text>
    </View>
  )
}


LapInfo.propTypes = {
  lap: PropTypes.number
}
LapInfo.defaultProps = {}

export default LapInfo
