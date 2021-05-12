import Wall from '../../src/Wall'
import User from '../../src/User'
import Post from '../../src/Post'

jest.mock('../../src/User')
jest.mock('../../src/Post')

describe('Wall', () => {
  const user = new User('any name')
  const wall = new Wall(user)
  it('has an owner', () => {
    expect(wall).toHaveProperty('owner')
    expect(wall.owner).toBeInstanceOf(User)
  })
  it('has posts', () => {
    expect(wall).toHaveProperty('posts')
    expect(wall.posts).toBeInstanceOf(Array)
  })
  describe("owner's posts", () => {
    beforeAll(() => {
      // @ts-ignore
      Post.mockImplementation((_: any, content: string) => {
        return {
          content,
        }
      })
    })
    test('you can add a post', () => {
      expect(wall.latest(1).length).toEqual(0)
      wall.add(new Post(user, 'any content'))
      expect(wall.latest(1)[0].content).toBe('any content')
    })
    test('add() posts are insertion ordered', () => {
      wall.add(new Post(user, 'oldest'))
      wall.add(new Post(user, 'in between'))
      wall.add(new Post(user, 'newest'))
      const posts = wall.latest(3)
      expect(posts[0].content).toBe('oldest')
      expect(posts[1].content).toBe('in between')
      expect(posts[2].content).toBe('newest')
    })
  })
})
