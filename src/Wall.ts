import User from './User'

export default class Wall {
  owner: User
  constructor(owner: User) {
    this.owner = owner
  }
}
