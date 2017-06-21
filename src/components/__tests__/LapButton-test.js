import React from 'react'
import LapButton from './../LapButton'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<LapButton />).toJSON()
  expect(rendered).toBeTruthy()
  expect(rendered).toMatchSnapshot()
});
