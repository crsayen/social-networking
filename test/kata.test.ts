import User from '../src/User'
const sleep = (t) => new Promise((res) => setTimeout(res, t))

describe('Kata', () => {
  const bob = new User('Bob')
  const alice = new User('Alice')
  const charlie = new User('Charlie')
  describe('Publishing', () => {
    describe('Alice publishes messages to her personal timeline', () => {
      alice.publish('I love the weather today.')

      it("should be viewable on Alice's timeline", () => {
        expect(alice.timeline.view()).toBe(
          'I love the weather today. (1 second ago)'
        )
      })
    })
  })

  describe('Timeline', () => {
    describe('Bob posts to his timeline', () => {
      it('should be viewable', async () => {
        // wait some time so the dates work out
        await sleep(1000)
        bob.publish('Darn! We lost!')

        await sleep(1000)
        bob.publish('Good game though.')

        expect(bob.timeline.view()).toBe(
          'Good game though. (1 second ago)\n' +
            'Darn! We lost! (2 seconds ago)'
        )
      })
    })
  })
  describe('Following', () => {
    describe('Charlie follows Alice and Bob', () => {
      test("Charlie's wall should show all of the posts", async () => {
        await sleep(1000)
        charlie.publish("I'm in New York today! Anyone wants to have a coffee?")

        charlie.follow(alice)
        charlie.follow(bob)

        expect(charlie.wall.view()).toBe(
          "Charlie - I'm in New York today! Anyone wants to have a coffee? (1 second ago)\n" +
            'Bob - Good game though. (2 seconds ago)\n' +
            'Bob - Darn! We lost! (3 seconds ago)\n' +
            'Alice - I love the weather today. (4 seconds ago)'
        )
      })
    })
  })
})
