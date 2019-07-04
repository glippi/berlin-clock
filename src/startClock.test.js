import { startClock } from './startClock'

let _Date

describe('startClock should', () => {
  test('give the actual time in hh:mm:ss format', () => {
    const MOCKED_DATE = new Date('2019-05-14T11:01:08.135Z')
    global.Date = jest.fn(() => MOCKED_DATE)

    const formattedDate = startClock(new Date())

    expect(formattedDate).toBe('13:01:08')
    global.Date = _Date
  })
})
