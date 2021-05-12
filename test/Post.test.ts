import Post from '../src/Post'

describe('Post', () => {
  const post = new Post('any content')
  it('has a timestamp', () => {
    expect(post).toHaveProperty('timestamp')
    expect(post.timestamp).toBeInstanceOf(Date)
  })
  it('has content', () => {
    expect(post).toHaveProperty('content')
    expect(typeof post.content).toBe('string')
  })
})
