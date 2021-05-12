import User from './User'
import Post from './Post'

export default class Timeline {
  owner: User
  posts: Post[]
  constructor(owner: User) {
    this.owner = owner
    this.posts = []
  }

  add(post: Post) {
    if (!Object.is(this.owner, post.author))
      throw new Error('only the owner can post to their timeline')
    this.posts.push(post)
  }
}
