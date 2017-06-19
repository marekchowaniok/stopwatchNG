import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StartStopButton from './StartStopButton'
import LapButton from './LapButton'

const StopWatch = (props) => {
  return (
    <View style={styles.container} >
      <View style={[styles.header, border('yellow')]}>
        <View style={[styles.counter, border('red')]}>
          <Text>00:00:00</Text>
        </View>
        <View style={[styles.buttons, border('green')]}>
          <StartStopButton/>
          <LapButton/>
        </View>
      </View>
      <View style={[styles.footer, border('blue')]}>
        <Text>Lap info sss</Text>
      </View>
    </View>

  )
}

StopWatch.propTypes = {}
StopWatch.defaultProps = {}

const border = (color) => {
  return {
    borderColor: color,
    borderWidth: 4
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    flex: 1,
  },
  counter: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    flex:3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  footer: {
    flex: 1,
  }
})

export default StopWatch
