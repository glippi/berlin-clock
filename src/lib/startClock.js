import { formatMinutesOrSeconds } from './formatMinutesOrSeconds'

export function startClock(date) {
  const h = date.getHours()
  const m = formatMinutesOrSeconds(date.getMinutes())
  const s = formatMinutesOrSeconds(date.getSeconds())

  return `${h}:${m}:${s}`
}
