import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StartStopButton from './StartStopButton'
import LapButton from './LapButton'
import formatTime from 'minutes-seconds-milliseconds'

export default class StopWatch extends React.Component {

  state = {
    timeElapsed: null,
    startStopButtonName: 'Start',
    running: false,
    startTime: null,
    laps: []
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={[styles.header, border('white')]}>
          <View style={[styles.counter, border('white')]}>
            <Text style={styles.timer}>{formatTime(this.state.timeElapsed)}</Text>
          </View>
          <View style={[styles.buttons, border('white')]}>
            <StartStopButton onStartStopPress={this.startTimePressed} name={this.state.startStopButtonName}/>
            <LapButton onLapButtonPress={this.lapButtonPressed} />
          </View>
        </View>
        <View style={[styles.footer, border('blue')]}>
          <Text>Lap info sss</Text>
        </View>
      </View>

    )
  }

  startTimePressed = () => {
    const startTime = new Date()

    // stop timer
    if (this.state.running) {
      clearInterval(this.interval)

      this.setState({
        startStopButtonName: 'Start',
        running: false,

      })
      return
    }

    // start timer
    this.setState({
      startStopButtonName: 'Stop',
      startTime: new Date()
    })

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      })
    }, 30)

  }

  lapButtonPressed = () => {
    console.log('lap button pressed')
  }


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
    justifyContent: 'center',
  },
  timer: {
    fontSize: 50
  },
  buttons: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  footer: {
    flex: 1,
  }
})

