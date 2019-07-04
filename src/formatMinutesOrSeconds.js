export function formatMinutesOrSeconds(minutesOrSeconds) {
  return minutesOrSeconds < 10 ? `0${minutesOrSeconds}` : `${minutesOrSeconds}`
}
