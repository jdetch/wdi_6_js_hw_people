var Person = function(firstName, lastName, age, weight, height, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = height || Math.floor(Math.random() * 51) + 150;
  this.friends = friends || [];
};

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
    var nameIndex = this.friends.indexOf('name');
    if (nameIndex > -1){
    return this.friends.splice(nameIndex, 1);
    }
  }
};



