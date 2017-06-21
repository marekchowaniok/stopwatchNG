import React from 'react'
import StopWatch from './../StopWatch'
import StartStopButton from './../StartStopButton'
import LapButton from './../LapButton'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  const rendered = renderer.create(<StopWatch />).toJSON()
  expect(rendered).toBeTruthy()
  expect(rendered).toMatchSnapshot()
});

 it('Stopwatch has child components', () => {
   const stopWatch = shallow(<StopWatch />)
   expect(shallow(<StopWatch />).find(StartStopButton)).toHaveLength(1)
   expect(shallow(<StopWatch />).find(LapButton)).toHaveLength(1)
 })

describe('Stopwatch buttons', () => {
  it('Stopwatch lap button click', () => {
    const wrapper = shallow(<StopWatch />)
    // console.log(wrapper.state())
    expect(wrapper.find(LapButton)).toHaveLength(1)
    expect(wrapper.state('laps')).toHaveLength(0)
    expect(wrapper.state('startTime')).toBeNull()
    wrapper.find(StartStopButton).simulate('startStopPress')
    wrapper.find(LapButton).simulate('lapButtonPress')
    expect(wrapper.state('laps')).toHaveLength(1)
    expect(wrapper.state('startTime')).not.toBeNull()
    // console.log(wrapper.state())
  })

  it('Stopwatch StartStop button click', () => {
    const wrapper = shallow(<StopWatch />)
    // console.log(wrapper.state())
    expect(wrapper.find(StartStopButton)).toHaveLength(1)
    expect(wrapper.state('startStopButtonName')).toBe('Start')
    expect(wrapper.state('startTime')).toBeNull()
    expect(wrapper.state('running')).toBe(false)
    wrapper.find(StartStopButton).simulate('startStopPress')
    expect(wrapper.state('startStopButtonName')).toBe('Stop')
    expect(wrapper.state('startTime')).not.toBeNull()
    expect(wrapper.state('running')).toBe(true)
    // console.log(wrapper.state())
    wrapper.find(StartStopButton).simulate('startStopPress')
    expect(wrapper.state('startStopButtonName')).toBe('Start')
    expect(wrapper.state('running')).toBe(false)
    // console.log(wrapper.state())
  })

  it('Stopwatch styles testing', () => {
    const wrapper = shallow(<StopWatch />)

    expect(wrapper.props().style.flex).toBe(1)
    expect(wrapper.props().style.alignItems).toBe('stretch')
    expect(wrapper.find('View').at(0).props().style).toEqual({ flex: 1, alignItems: 'stretch' })
    expect(wrapper.find('View').at(1).props().style).toEqual([ { flex: 1 }, { borderColor: 'white', borderWidth: 4 } ])
    expect(wrapper.find('View').at(2).props().style).toEqual([{"alignItems": "center", "flex": 5, "justifyContent": "center"}, {"borderColor": "white", "borderWidth": 4}])
    expect(wrapper.find('View').at(3).props().style).toEqual([ { flex: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around' },
      { borderColor: 'white', borderWidth: 4 } ])
    expect(wrapper.find('View').at(4).props().style).toEqual([ { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
      { borderColor: 'white', borderWidth: 4 } ])
  })

})
