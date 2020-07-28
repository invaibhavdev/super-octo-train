import axios from 'axios'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import getQueryParam from 'utils/getQueryParam'
import getUrlHost from 'utils/getUrlHost'
import { fetchNews } from 'js/actions/home'
import mockJSON from '../mockAPIData'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// Mocking axios
jest.mock('axios')

// Test case for fetching network call
describe('fetchNews()', () => {
  it('it creates LOAD_PAGE_DATA and LOAD_PAGE_DATA_SUCCESS when fetching news', async () => {
    axios.get.mockResolvedValue(mockJSON)
    const expectedActions = [
      {
        type: 'LOAD_PAGE_DATA'
      },
      {
        type: 'LOAD_PAGE_DATA_SUCCESS',
        data: mockJSON.data.hits,
        prevPage: mockJSON.data.page > 0,
        nextPage: mockJSON.data.page < mockJSON.data.nbPages - 1
      }
    ]
    const store = mockStore({ isLoading: false, pageData: [] })
    return store.dispatch(fetchNews()).then(() => {
      expect(store.getActions()).toMatchObject(expectedActions)
    })
  })
})

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
