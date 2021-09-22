class Voter {
  constructor(age) {
    this.age = age;
    this.votingAge = 18;
  }
  //   canVote() {
  //     if (this.age >= this.votingAge) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  canVote = () => this.age >= this.votingAge;

  getMessage() {
    if (this.canVote()) {
      return `You are allowed to vote, since you are over ${this.votingAge} years old`;
    } else {
      return `You are not allowed to vote. You have to be ${this.votingAge} years old to be able to vote`;
    }
  }
}

const voter1 = new Voter(17);
const voter2 = new Voter(23);
console.log(voter1.canVote());
console.log(voter2.canVote());
console.log(voter1.getMessage());
console.log(voter2.getMessage());
