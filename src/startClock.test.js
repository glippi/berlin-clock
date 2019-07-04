import { startClock } from './startClock'

let _Date

describe('startClock should', () => {
  test('give the actual time in hh:mm:ss format', () => {
    const MOCKED_DATE = new Date('2017-06-13T04:41:20')
    global.Date = jest.fn(() => MOCKED_DATE)

    const formattedDate = startClock(new Date())

    expect(formattedDate).toBe('4:41:20')
    global.Date = _Date
  })
})
