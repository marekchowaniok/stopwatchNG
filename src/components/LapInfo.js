import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import formatTime from 'minutes-seconds-milliseconds'

const LapInfo = ({lap}) => {
  return (
    <View>
      <Text style={styles.item}>{formatTime(lap)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 30
  }
})

LapInfo.propTypes = {}
LapInfo.defaultProps = {}

export default LapInfo
