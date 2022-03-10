class Member
{
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, toMember) {
        this.chatroom.send(message, this, toMember);
    }

    receive(message, fromMember) {
        console.log(`${fromMember.name} to ${this.name} : ${message}`);
    }
}

class Chatroom
{
    constructor() {
        this.members = {};
    }

    addMember(member) {
        this.members[member.name] = member;
        member.chatroom = this;
    }

    send(message, fromMember, toMember) {
        toMember.receive(message, fromMember);
    }
}

const chatroom = new Chatroom();

const john = new Member('John');
const jane = new Member('jane');
const sara = new Member('sara');

chatroom.addMember(john);
chatroom.addMember(jane);
chatroom.addMember(sara);

john.send('How you doing?', sara);
sara.send('Hey Im good how are you yourself?', john);

jane.send('Hey!', sara);
sara.send('Hey Thank you', jane);
