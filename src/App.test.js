// import React from 'react'
// import { render } from '@testing-library/react';
// import App from './App';
import getQueryParam from 'utils/getQueryParam'
import getUrlHost from 'utils/getUrlHost'

// test('renders learn react link', () => {
//   // const { getByText } = render(<App />);
//   // const linkElement = getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   console.log('okay')
// });

describe('Return page number', () => {
  // this is a test to get page number from query params in order to fetch data from the HN API
  test('it returns page number from query param given a URL', () => {
    const input = 'http://www.example.com/?p=2'
    const output = '2'
    expect(getQueryParam(input)).toEqual(output)
  })
})

describe('Get URL domain name', () => {
  // this is a test for the domain name that we show beside the news link
  test('it returns URL domain name for the link passed to it', () => {
    const input =
      'https://hacks.mozilla.org/2020/07/testing-firefox-more-efficiently-with-machine-learning/'
    const output = 'hacks.mozilla.org'
    expect(getUrlHost(input)).toEqual(output)
  })
})
