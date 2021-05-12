export default class Post {
  timestamp: Date
  content: string
  constructor(content: string) {
    this.timestamp = new Date()
    this.content = content
  }
}
