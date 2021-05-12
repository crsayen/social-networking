import Timeline from '../src/Timeline'
import User from '../src/User'

describe('Timeline', () => {
  const user = new User('any name')
  const timeline = new Timeline(user)
  it('has an owner', () => {
    expect(timeline).toHaveProperty('owner')
    expect(timeline.owner).toBeInstanceOf(User)
  })
})
