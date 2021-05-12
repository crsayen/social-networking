const S_PER_MIN = 60
const S_PER_HR = S_PER_MIN * 60
const S_PER_DAY = S_PER_HR * 24
const S_PER_WEEK = S_PER_DAY * 7
const S_PER_MONTH = S_PER_DAY * 30
const S_PER_YEAR = S_PER_DAY * 365

const MIN_CUTOFF = S_PER_MIN
const HR_CUTOFF = S_PER_HR - S_PER_MIN / 2
const DAY_CUTOFF = S_PER_DAY - S_PER_HR / 2
const WEEK_CUTOFF = S_PER_WEEK - S_PER_DAY / 2
const MONTH_CUTOFF = S_PER_MONTH - S_PER_WEEK / 2
const YEAR_CUTOFF = S_PER_YEAR - S_PER_MONTH / 2

export default function secondsToElapsed(secs: number): string {
  const fmt = (quantity: number, unit: string) => {
    const rounded = Math.round(quantity)
    // if quantity > 1 we want to pluralize the unit name (hour vs hours)
    const s = rounded == 1 ? '' : 's'
    return `${rounded} ${unit + s} ago`
  }

  if (secs >= YEAR_CUTOFF) return fmt(secs / S_PER_YEAR, 'year')
  if (secs >= MONTH_CUTOFF) return fmt(secs / S_PER_MONTH, 'month')
  if (secs >= WEEK_CUTOFF) return fmt(secs / S_PER_WEEK, 'week')
  if (secs >= DAY_CUTOFF) return fmt(secs / S_PER_DAY, 'day')
  if (secs >= HR_CUTOFF) return fmt(secs / S_PER_HR, 'hour')
  if (secs >= MIN_CUTOFF) return fmt(secs / S_PER_MIN, 'minute')

  // make sure we don't write "0 seconds ago"
  if (secs < 1) secs = 1
  return fmt(secs, 'second')
}
