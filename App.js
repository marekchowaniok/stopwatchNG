import React from 'react'
import { StyleSheet, View } from 'react-native'
import StopWatch from './src/components/StopWatch'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <StopWatch/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'stretch',
    // justifyContent: 'center',
  },
})
