import User from './User'

export default class Post {
  author: User
  timestamp: Date
  content: string
  constructor(author: User, content: string) {
    this.author = author
    this.timestamp = new Date()
    this.content = content
  }
}
