import Timeline from './Timeline'
import Post from './Post'

export default class User {
  name: string
  timeline: Timeline
  following: Set<User>
  followers: Set<User>
  constructor(name: string) {
    this.name = name
    this.timeline = new Timeline(this)
    this.following = new Set()
    this.followers = new Set()
  }

  follow(user: User) {
    user.addFollower(this)
    this.following.add(user)
  }

  addFollower(user: User) {
    this.followers.add(user)
  }

  publish(content: string) {
    const post = new Post(this, content)
    this.timeline.add(post)
  }
}
