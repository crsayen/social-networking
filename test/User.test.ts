import User from '../src/User'
import Timeline from '../src/Timeline'

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
      expect(user.following).toBeInstanceOf(Set)
    })
    it('has followers', () => {
      expect(user).toHaveProperty('followers')
      expect(user.followers).toBeInstanceOf(Set)
    })
    it('can follow other Users', () => {
      user.follow(otherUser)
      expect(user.following).toContain(otherUser)
    })
    it('keeps track of other Users that followed it', () => {
      expect(otherUser.followers).toContain(user)
    })
  })
})
