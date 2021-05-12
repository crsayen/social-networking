import Post from '../src/Post'
import User from '../src/User'

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
})
