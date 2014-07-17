var Person = function(firstName, lastName, age, weight, height, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = height || Math.floor(Math.random() * 51) + 150;
  this.friends = friends || [];
};

//Could also use options above if you want to be able to enter some parameters
// and not others (SEE BELOW)

// var Person = function(firstName, lastName, options){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   options = options || {};
//   this.age = options.age || 30;
//   this.weight = options.weight || 80;
//   this.height = options.height || Math.floor(Math.random() * 51) + 150;
//   this.friends = options.friends || [];
// };

Person.prototype = {
  fullName: function(){
    return this.firstName + ' ' + this.lastName;
  },
  weightInStone: function(){
    return this.weight / 6.35;
  },
  addFriend: function(friend){
    return this.friends.push(friend);
  },
  removeFriend: function(name){
    var nameIndex = this.friends.indexOf(name);
    if (nameIndex > -1){
    return this.friends.splice(nameIndex, 1);
    }
// CORRECT ANSWER

 // removeFriend: function(name) {
 //    for(var i = 0; i < this.friends.length; i++) {
 //      if(this.friends[i].fullName() === name) {
 //        return this.friends.splice(i, 1);
 //      }
 //    }
 //  },

  },
  greetPeople: function(people, greeting){
    people = people || this.friends;
    greeting = greeting || "Hi";

    if(people.length === 0){
      throw new Error("You have no friends!");
    } else {
      people.forEach(function(person){
        greeting = greeting + " " + person.fullName() + "\n";
      });
      return greeting;
    }
  }
};

// CORRECT ANSWER

// greetPeople: function(options) {
//     options = options || {};
//     people = options.people || this.friends;
//     greeting = options.greeting || 'Hi';

//     if(people.length === 0) {
//       throw new Error('Nobody to greet!');
//     } else {
//       var greetings = '';
//       people.forEach(function(friend){
//         greetings += greeting + ', ' + friend.fullName() + '! ';
//       });
//       return greetings;
//     }
//   }
// };
