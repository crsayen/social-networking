import User from './User'
import secondsToElapsed from './util/secondsToElapsed'

export default class Post {
  _author: User
  timestamp: Date
  _content: string
  constructor(author: User, content: string) {
    this._author = author
    this.timestamp = new Date()
    this._content = content
  }

  get author(): User {
    return this._author
  }

  get content(): string {
    return this._content
  }

  get posted(): string {
    const msecs = Date.now() - this.timestamp.getTime()
    const secs = Math.ceil(msecs / 1000)
    return secondsToElapsed(secs)
  }

  toString(): string {
    return `${this.author.name} - ${this.content} (${this.posted})`
  }
}
