var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
var arr = [];

var friendsArr = friends.split(',');

var friendsArr = friendsArr.sort();

for (var i = 0; i < friendsArr.length; i++) {
  arr.unshift(friendsArr[i]);
}

console.log(arr);
