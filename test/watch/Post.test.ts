import Post from '../../src/Post'
import User from '../../src/User'

describe('Post', () => {
  const user = new User('any name')
  const post = new Post(user, 'any content')
  it('has an author', () => {
    expect(post).toHaveProperty('author')
    expect(post.author).toBeInstanceOf(User)
  })
  it('has a timestamp', () => {
    expect(post).toHaveProperty('timestamp')
    expect(post.timestamp).toBeInstanceOf(Date)
  })
  it('has content', () => {
    expect(post).toHaveProperty('content')
    expect(typeof post.content).toBe('string')
  })
  describe('posted', () => {
    it('prints the time since posting nicely', () => {
      const testexp = /\d{1,} (second)s? ago/
      expect(post.posted).toMatch(testexp)
    })
  })
  describe('toString', () => {
    it('returns the post data formatted nicely as a string', () => {
      const testexp = /(any name - any content \()\d{1,} (second)s? ago\)/
      expect(post.toString()).toMatch(testexp)
    })
    it('lets us use a Post in a template literal', () => {
      const testexp = /(any name - any content \()\d{1,} (second)s? ago\)/
      expect(`${post}`).toMatch(testexp)
    })
  })
})
