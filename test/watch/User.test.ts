import User from '../../src/User'
import Timeline from '../../src/Timeline'
import Post from '../../src/Post'

describe('User', () => {
  const user = new User('any name')
  it('has a name', () => {
    expect(user).toHaveProperty('name')
    expect(typeof user.name).toBe('string')
  })
  it('has a timeline', () => {
    expect(user).toHaveProperty('timeline')
    expect(user.timeline).toBeInstanceOf(Timeline)
  })
  describe('followers', () => {
    const otherUser = new User('any other name')
    it('has Users it follows', () => {
      expect(user).toHaveProperty('following')
      expect(user.following).toBeInstanceOf(Array)
    })
    it('has followers', () => {
      expect(user).toHaveProperty('followers')
      expect(user.followers).toBeInstanceOf(Array)
    })
    it('can follow other Users', () => {
      user.follow(otherUser)
      expect(user.following).toContain(otherUser)
    })
    it('keeps track of other Users that followed it', () => {
      expect(otherUser.followers).toContain(user)
    })
  })
  describe('posts', () => {
    it('can be published', () => {
      expect(user.publish('any content'))
    })
    it('shows up in the Timeline', () => {
      expect(user.timeline.latest(1)[0].content).toBe('any content')
    })
    it('shows up on the Wall', () => {
      expect(user.wall.latest(1)[0].content).toBe('any content')
    })
    describe('notify', () => {
      it('should add the post to the Wall', () => {
        const otherUser = new User('any other name')
        user.notify(new Post(otherUser, 'any other content'))
        expect(user.wall.latest(1)[0].content).toBe('any other content')
      })
    })
  })
})
