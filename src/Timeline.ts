import User from './User'
import Post from './Post'

export default class Timeline {
  _owner: User
  _posts: Post[]
  constructor(user: User) {
    this._owner = user
    this._posts = []
  }

  get owner(): User {
    return this._owner
  }

  get posts(): Post[] {
    // we don't want to return a reference
    return [...this._posts]
  }

  add(post: Post) {
    // Only a Timeline's owner can post
    if (!Object.is(this._owner, post.author))
      throw new Error('only the owner can post to their timeline')
    this._posts.push(post)
  }

  latest(numberOfPosts: number): Post[] {
    const start = this._posts.length - numberOfPosts
    // make sure we aren't passing a negative number
    return this._posts.slice(start > 0 ? start : 0)
  }

  view(): string {
    return this._posts
      .reverse()
      .map((post) => `${post.content} (${post.posted})`)
      .join('\n')
  }
}
