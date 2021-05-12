import { hello } from '../src/index'

describe('index.ts', () => {
  describe('hello', () => {
    it('returns "hello world"', () => {
      expect(hello()).toBe('hello world')
    })
  })
})
