import User from './User'
import Post from './Post'

export default class Timeline {
  owner: User
  posts: Post[]
  constructor(owner: User) {
    this.owner = owner
    this.posts = []
  }
}
