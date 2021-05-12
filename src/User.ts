import Timeline from './Timeline'
import Post from './Post'
import Wall from './Wall'

export default class User {
  _name: string
  timeline: Timeline
  _wall: Wall
  _following: Set<User>
  _followers: Set<User>
  constructor(name: string) {
    this._name = name
    this.timeline = new Timeline(this)
    this._wall = new Wall(this)
    this._following = new Set()
    this._followers = new Set()
  }

  get name(): string {
    return this._name
  }

  get following(): User[] {
    // we don't want to return a reference
    return [...this._following]
  }

  get followers(): User[] {
    // we don't want to return a reference
    return [...this._followers]
  }

  get wall(): Wall {
    return this._wall
  }

  follow(user: User) {
    user.addFollower(this)
    this._following.add(user)
    this.wall.update()
  }

  addFollower(user: User) {
    this._followers.add(user)
  }

  publish(content: string) {
    const post = new Post(this, content)
    this.timeline.add(post)
    this._wall.add(post)
    for (let follower of this.followers) follower.notify(post)
  }

  notify(post: Post) {
    this._wall.add(post)
  }
}
