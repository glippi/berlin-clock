import { formatMinutesOrSeconds } from './formatMinutesOrSeconds'

let _Date

beforeEach(() => {
  _Date = Date
})

afterEach(() => {
  global.Date = _Date
})

describe('formatMinutesOrSeconds should', () => {
  test('add a 0 if the seconds is less than 10', () => {
    const MOCKED_DATE_SECONDS_LESS_TEN = new Date('2019-05-14T00:00:08.135Z')
    global.Date = jest.fn(() => MOCKED_DATE_SECONDS_LESS_TEN)

    const seconds = formatMinutesOrSeconds(new Date().getSeconds())

    expect(seconds).toBe('08')
  })

  test('tell the seconds', () => {
    const MOCKED_DATE_SECONDS_GREATER_TEN = new Date('2019-05-14T00:00:11.135Z')
    global.Date = jest.fn(() => MOCKED_DATE_SECONDS_GREATER_TEN)

    const seconds = formatMinutesOrSeconds(new Date().getSeconds())

    expect(seconds).toBe('11')
  })

  test('add a 0 if the minute is less than 10', () => {
    const MOCKED_DATE_MINUTES_LESS_TEN = new Date('2019-05-14T00:08:00.135Z')
    global.Date = jest.fn(() => MOCKED_DATE_MINUTES_LESS_TEN)

    const minutes = formatMinutesOrSeconds(new Date().getMinutes())

    expect(minutes).toBe('08')
  })

  test('tell the minutes', () => {
    const MOCKED_DATE_MINUTES_GREATER_TEN = new Date('2019-05-14T00:11:00.135Z')
    global.Date = jest.fn(() => MOCKED_DATE_MINUTES_GREATER_TEN)

    const minutes = formatMinutesOrSeconds(new Date().getMinutes())

    expect(minutes).toBe('11')
  })
})
