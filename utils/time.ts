const SECONDS_IN_A_MINUTE = 60
const SECONDS_IN_AN_HOUR = 60 * SECONDS_IN_A_MINUTE
const SECONDS_IN_A_DAY = 24 * SECONDS_IN_AN_HOUR
const SECONDS_IN_A_MONTH = 30 * SECONDS_IN_A_DAY
const SECONDS_IN_A_YEAR = 365 * SECONDS_IN_A_DAY

export function convertSecondsToDuration(seconds: number) {
  let _seconds = seconds
  const duration: Duration = {}

  duration.years = Math.floor(_seconds / SECONDS_IN_A_YEAR)
  _seconds %= SECONDS_IN_A_YEAR

  duration.months = Math.floor(_seconds / SECONDS_IN_A_MONTH)
  _seconds %= SECONDS_IN_A_MONTH

  duration.days = Math.floor(_seconds / SECONDS_IN_A_DAY)
  _seconds %= SECONDS_IN_A_DAY

  duration.hours = Math.floor(_seconds / SECONDS_IN_AN_HOUR)
  _seconds %= SECONDS_IN_AN_HOUR

  duration.minutes = Math.floor(_seconds / SECONDS_IN_A_MINUTE)
  duration.seconds = _seconds % SECONDS_IN_A_MINUTE

  return duration
}
