import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from "react-test-renderer"

test('verifies card displays JoeyHoellerich GitHub information', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})

