import User from '../src/User'

describe('User', () => {
  const user = new User('any name')
  it('has a name', () => {
    expect(user).toHaveProperty('name')
    expect(typeof user.name).toBe('string')
  })
})
