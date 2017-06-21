import React from 'react'
import LapInfo from './../LapInfo'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<LapInfo />).toJSON()
  expect(rendered).toBeTruthy()
  expect(rendered).toMatchSnapshot()
});
