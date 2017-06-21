import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StartStopButton from './StartStopButton'
import LapButton from './LapButton'
import LapInfo from './LapInfo'
import formatTime from 'minutes-seconds-milliseconds'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  counter: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
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
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

const border = (color) => {
  return {
    borderColor: color,
    borderWidth: 4
  }
}

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
            <LapButton onLapButtonPress={this.lapButtonPressed}/>
          </View>
        </View>

        <View style={[styles.footer, border('white')]}>
          {this.lapsSection()}
        </View>
      </View>

    )
  }

  startTimePressed = () => {

    // stop timer
    if (this.state.running) {
      clearInterval(this.interval)

      this.setState({
        startStopButtonName: 'Start',
        running: false
      })
      return
    }

    // start timer
    this.setState({
      startStopButtonName: 'Stop',
      startTime: new Date(),
      laps: [],
      running: true
    })

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime
      })
    }, 30)

  }

  lapButtonPressed = () => {
    const lap = this.state.timeElapsed
    this.setState({
      startTime: new Date(),
      laps: [...this.state.laps, lap]
    })
  }

  lapsSection = () => {
    return this.state.laps.map((time, i) => <LapInfo key={i} lap={time}/>)
  }

}

StopWatch.propTypes = {}
StopWatch.defaultProps = {}



