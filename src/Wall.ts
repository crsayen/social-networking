import User from './User'
import Post from './Post'
import Timeline from './Timeline'
import { sortBy, flatten } from 'lodash'

export default class Wall extends Timeline {
  constructor(owner: User) {
    super(owner)
  }

  // we only need to update when we follow new users
  // the User.follow method calls update on the User instance's Wall
  update() {
    // a User should see their own posts on their Wall
    const following = [this._owner, ...this._owner.following]
    this._posts = this.getAndSortPosts(following)
  }

  // we can add posts directly as long as owner.following has not changed.
  // the User.notify method calls add on the User instance's Wall
  add(post: Post) {
    this._posts.push(post)
  }

  private getAndSortPosts(users: User[]): Post[] {
    // concatenate all of the User's timelines into one long timeline
    const combinedTimelines = flatten(users.map((user) => user.timeline.posts))
    // sort the posts by timestamp
    return sortBy(combinedTimelines, 'timestamp')
  }

  view(): string {
    return this._posts
      .reverse()
      .map((post) => post.toString())
      .join('\n')
  }
}
