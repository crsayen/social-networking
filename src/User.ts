import Timeline from './Timeline'

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
}
