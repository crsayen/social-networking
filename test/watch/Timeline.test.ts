import Timeline from '../../src/Timeline'
import Post from '../../src/Post'
import User from '../../src/User'

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
    }).toThrowError('only the owner can post to their timeline')
  })
  describe('latest', () => {
    const user2 = new User('user2')
    const timeline2 = new Timeline(user2)

    // fill the timeline w posts 0, 1, 2, ...
    for (let i = 0; i < 10; i++) {
      let post = new Post(user2, `post ${i}`)
      timeline2.add(post)
    }

    it('gets the latest n posts from the Timeline', () => {
      const latest1 = timeline2.latest(1)
      expect(latest1.length).toBe(1)
      expect(latest1[0].content).toBe('post 9')

      const latest5 = timeline2.latest(5)
      expect(latest5.length).toBe(5)
      const content = latest5.map((p) => p.content)
      expect(content).toEqual([
        'post 5',
        'post 6',
        'post 7',
        'post 8',
        'post 9',
      ])
    })
    it('wont break when we ask for too many posts', () => {
      const latest20 = timeline2.latest(20)
      expect(latest20.length).toBe(timeline2.posts.length)
    })
  })
})
