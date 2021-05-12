import secondsToElapsed from '../../src/util/secondsToElapsed'

describe('secondsToElapsed', () => {
  test('should return "n second(s) ago"', () => {
    expect(secondsToElapsed(0)).toBe('1 second ago')
    expect(secondsToElapsed(1)).toBe('1 second ago')
    expect(secondsToElapsed(59)).toBe('59 seconds ago')
  })
  test('should return "n minutes(s) ago"', () => {
    expect(secondsToElapsed(60)).toBe('1 minute ago')
    expect(secondsToElapsed(60 * 59)).toBe('59 minutes ago')
    expect(secondsToElapsed(60 * 59.4)).toBe('59 minutes ago')
  })
  test('should return "n hour(s) ago"', () => {
    expect(secondsToElapsed(60 * 59.5)).toBe('1 hour ago')
    expect(secondsToElapsed(60 * 60)).toBe('1 hour ago')
    expect(secondsToElapsed(60 * 60 * 23)).toBe('23 hours ago')
    expect(secondsToElapsed(60 * 60 * 23.4)).toBe('23 hours ago')
  })
  test('should return "n day(s) ago"', () => {
    expect(secondsToElapsed(60 * 60 * 23.5)).toBe('1 day ago')
    expect(secondsToElapsed(60 * 60 * 24)).toBe('1 day ago')
    expect(secondsToElapsed(60 * 60 * 24 * 6)).toBe('6 days ago')
    expect(secondsToElapsed(60 * 60 * 24 * 6.4)).toBe('6 days ago')
  })
  test('should return "n week(s) ago"', () => {
    expect(secondsToElapsed(60 * 60 * 24 * 6.5)).toBe('1 week ago')
    expect(secondsToElapsed(60 * 60 * 24 * 7)).toBe('1 week ago')
    expect(secondsToElapsed(60 * 60 * 24 * 7 * 3)).toBe('3 weeks ago')
    expect(secondsToElapsed(60 * 60 * 24 * 7 * 3.4)).toBe('3 weeks ago')
  })
  test('should return "n month(s) ago"', () => {
    expect(secondsToElapsed(60 * 60 * 24 * 29.5)).toBe('1 month ago')
    expect(secondsToElapsed(60 * 60 * 24 * 30)).toBe('1 month ago')
    expect(secondsToElapsed(60 * 60 * 24 * 30 * 11)).toBe('11 months ago')
    expect(secondsToElapsed(60 * 60 * 24 * 30 * 11.4)).toBe('11 months ago')
  })
  test('should return n year(s) ago', () => {
    expect(secondsToElapsed(60 * 60 * 24 * 364.5)).toBe('1 year ago')
    expect(secondsToElapsed(60 * 60 * 24 * 365)).toBe('1 year ago')
    expect(secondsToElapsed(60 * 60 * 24 * 365 * 5)).toBe('5 years ago')
  })
})
