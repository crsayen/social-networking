import Wall from '../src/Wall'
import User from '../src/User'

describe('Wall', () => {
  const user = new User('any name')
  const wall = new Wall(user)
  it('has an owner', () => {
    expect(wall).toHaveProperty('owner')
    expect(wall.owner).toBeInstanceOf(User)
  })
})
