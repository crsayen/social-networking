import Timeline from '../src/Timeline'
import Post from '../src/Post'
import User from '../src/User'

describe('Timeline', () => {
  const user = new User('any name')
  const timeline = new Timeline(user)
  it('has an owner', () => {
    expect(timeline).toHaveProperty('owner')
    expect(timeline.owner).toBeInstanceOf(User)
  })
  it('allows adding posts', () => {
    const post = new Post(user, 'any content')
    timeline.add(post)
    expect(timeline.posts[0].content).toBe('any content')
  })
  it('will not add posts from Users other than the owner', () => {
    const notOwner = new User('any other name')
    const post = new Post(notOwner, 'any content')
    expect(() => {
      timeline.add(post)
    }).toThrow('only the owner can post to their timeline')
  })
})
